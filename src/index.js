const axios = require('axios');
const {parse} = require('node-html-parser');
const {
  promises: fsPromises,
} = require('fs');

const baseUrl = 'https://dev.twitch.tv';
const file = `./README.md`;

const download = async () => {
  try {
    const content = await fsPromises.readFile(file, {encoding: 'utf8'});

    // const {status, data} = await axios.get('https://web.archive.org/web/20210617223124/https://dev.twitch.tv/docs/change-log');
    const {status, data} = await axios.get(`${baseUrl}/docs/change-log`);

    if (status === 200) {
      let page = '';

      const root = parse(data, {
        blockTextElements: {
          script: true,
          style: false,
          noscript: false,
          pre: false,
        },
      });

      // const jsonSemver = root.querySelector('head > script[type="application/ld+json"]').text;
      const changelog = root.querySelector('section.text-content tbody');
      const changes = changelog.querySelectorAll('>tr');

      changelog.querySelectorAll('a[href]').forEach(anchor => {
        const href = anchor.getAttribute('href');

        anchor.setAttribute('href', href
          // .replace(/^https.+\/https/i, 'https')
          // .replace(/^\/web\/.*\/https/i, 'https')
          .replace(/^(\/docs.*)/i, `${baseUrl}$1`));
      });

      changes.forEach(change => {
        const key = change.querySelector('>td:first-child').text;
        const html = change.querySelector('>td:first-child+td').innerHTML;

        page += `### ${key}\n\n${html}\n`;
      });

      await fsPromises.writeFile(file, content.replace(
        /(<!--START_SECTION:static-->)(.+)(<!--END_SECTION:static-->)/gims,
        `$1\n${page}\n$3`,
      ));
    } else {
      throw new Error(`Cannot download twitch changelog`);
    }
  } catch (e) {
    console.trace(e);
  }
};

(async () => {
  try {
    await download();
    process.exit(0);
  } catch (error) {
    process.stderr.write(error.stack);
    process.exit(1);
  }
})();
