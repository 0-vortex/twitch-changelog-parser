# twitch-changelog-parser

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![download](https://github.com/0-vortex/twitch-changelog-parser/actions/workflows/download.yml/badge.svg)](https://github.com/0-vortex/twitch-changelog-parser/actions/workflows/download.yml)

## Changelog

<!--START_SECTION:static-->
### 2022‑04‑29

<p><a href="https://dev.twitch.tv/docs/irc">Chat &amp; Chatbots</a> - Organization and content for this section has been improved for a better developer experience.</p>

### 2022‑04‑13

<p>Added 409 Conflict as a possible response code to <a href="https://dev.twitch.tv/docs/api/reference#ban-user">Ban User</a> and <a href="https://dev.twitch.tv/docs/api/reference#unban-user">Unban User</a>.</p>

<p>Added information about when the Twitch API may introduce breaking and non-breaking changes to the API. For details, see <a href="https://dev.twitch.tv/docs/api/guide#breaking-changes">Breaking Changes</a>.</p>

### 2022‑04‑12

<p>Enhanced Experiences and Event-based Drops have been <a href="https://discuss.dev.twitch.tv/c/announcements" target="_blank">decommissioned</a> and documentation has been removed.</p>

### 2022‑04‑07

<p><a href="https://dev.twitch.tv/docs/authentication">Authentication</a> - Organization and writing for this section has been improved for a better developer experience.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-hype-train-events">Get Hype Train Events</a> - Removed <code class="highlighter-rouge">id</code> query parameter. See the <a href="https://discuss.dev.twitch.tv/t/get-hype-train-events-api-endpoint-id-query-parameter-deprecation/37613" target="_blank">deprecation announcement</a> for more information.</p>

### 2022‑03‑18

<p>Removed documentation for “Get Banned Events” and “Get Moderator Events” Twitch API endpoints. For more information about the deprecation and removal of these endpoints, see the <a href="https://discuss.dev.twitch.tv/t/deprecation-of-twitch-api-event-endpoints-that-supported-websub-based-webhooks/35137" target="_blank">deprecation announcement</a>.</p>

### 2022‑02‑28

<p>Twitch API v5 endpoints (i.e. kraken) are no longer available. Documentation for these endpoints have been removed.</p>

### 2022‑02‑25

<p><a href="https://dev.twitch.tv/docs/irc/msg-id">Chat msg-id tags</a> updated for accuracy.</p>

### 2022‑02‑11

<p>Updated the <a href="https://dev.twitch.tv/docs/irc">Chatbots</a> content with the following changes:</p>

<ul>
  <li>
    <p>Replaced the /r9kbeta and /r9kbetaoff <a href="https://dev.twitch.tv/docs/irc/chat-commands">Twitch chat commands</a> to /uniquechat and /uniquechatoff, respectively, to match the commands used in Twitch Chat. The /r9kbeta and /r9kbetaoff continue to work but you should start using /uniquechat and /uniquechatoff at your earliest convenience.</p>
  </li>
  <li>
    <p>Removed the following tags from the list of possible <a href="https://dev.twitch.tv/docs/irc/tags#usernotice-tags">USERNOTICE tags</a>:</p>

    <ul>
      <li>anonsubgift</li>
      <li>anonsubmysterygift</li>
    </ul>
  </li>
  <li>
    <p>Added the <code class="highlighter-rouge">WHISPER</code> command to the <a href="https://dev.twitch.tv/docs/irc/commands#whisper">list of commands</a> that the Twitch IRC server may send your bot.</p>
  </li>
</ul>

### 2022‑02‑08

<p><a href="https://dev.twitch.tv/docs/api/reference#get-channel-information">Get channel information</a> endpoint</p>

<ul>
  <li>Changed the description for the <code class="highlighter-rouge">broadcaster_id</code> query parameter to indicate that you may specify a maximum of 100 IDs.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/api/reference#get-soundtrack-current-track">Get Soundtrack Current Track</a> endpoint</p>

<ul>
  <li>Changed the description for the <code class="highlighter-rouge">data</code> response field to remove the part that states that the list is empty if the broadcaster is not playing a track. The correct behavior is that if the broadcaster is not playing a track, the endpoint returns HTTP status code 404 Not Found.</li>
  <li>Changed the description for the <code class="highlighter-rouge">creator_channel_id</code> response field to indicate that its value is an empty string if a Twitch user didn’t create the track instead of <strong>null</strong>.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/api/reference#get-soundtrack-playlist">Get Soundtrack Playlist</a> endpoint</p>

<ul>
  <li>Changed the description for the <code class="highlighter-rouge">creator_channel_id</code> response field to indicate that its value is an empty string if a Twitch user didn’t create the track instead of <strong>null</strong>.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extension Policy 2.9</a> updated to clarify that the Twitch Extension Helper must be included as the first script in all front-end HTML files.</p>

### 2022‑01‑21

<p><a href="https://dev.twitch.tv/docs/extensions/#restrictions-on-content">Restrictions on content</a> updated to reflect the new Twitch Extensions policy for <a href="https://discuss.dev.twitch.tv/t/new-extensions-policy-for-content-security-policy-csp-directives-and-timeline-for-enforcement/33695" target="_blank">Content Security Policy (CSP) directives and enforcement</a>.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference#ban-user">Moderation API endpoints</a> have moved from public beta to generally available.</p>

### 2022‑01‑06

<p>Added the <code class="highlighter-rouge">new_subscription</code> Creator Goals type, which reports all new subscriptions since the goal’s inception. This type differs from the <code class="highlighter-rouge">subscription</code> type, which reports the net increase or decrease in subscriptions. See the <code class="highlighter-rouge">type</code> field of:</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-reference#goals-event">Goals Event</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-creator-goals">Get Creator Goals</a></li>
</ul>

### 2021‑12‑16

<p>The <a href="https://dev.twitch.tv/docs/api/reference#update-chat-settings">Update Chat Settings</a> endpoint now lets you:</p>

<ul>
  <li>Set the <code class="highlighter-rouge">follower_mode_duration</code> field to any value between 0 and 129600, inclusive.</li>
  <li>Set the <code class="highlighter-rouge">slow_mode_wait_time</code> field to any value between 3 and 120, inclusive.</li>
</ul>

<p>Open beta changes:</p>
<ul>
  <li>For <a href="https://dev.twitch.tv/docs/api/reference#ban-user">Ban Users</a>, bulk requests have been removed until a more scalable solution is available.</li>
  <li>For <a href="https://dev.twitch.tv/docs/api/reference#ban-user">Ban Users</a> and <a href="https://dev.twitch.tv/docs/api/reference#unban-user">Unban User</a>, error message formatting now utilizes the same structure as other API endpoints since bulk requests have been removed. HTTP 429 errors may also be returned if there are too many requests even within normal Twitch API rate limits.</li>
</ul>

### 2021‑12‑09

<p>Added the following Soundtrack APIs:</p>

<ol>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-soundtrack-current-track">Get Soundtrack Current Track</a> — Gets the Soundtrack track that the specified broadcaster is playing.</li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-soundtrack-playlists">Get Soundtrack Playlists</a> — Gets the list of Soundtrack playlists.</li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-soundtrack-playlist">Get Soundtrack Playlist</a> — Gets the specified Soundtrack playlist.</li>
</ol>

### 2021‑12‑03

<p>Updated <a href="https://dev.twitch.tv/docs/companies">Organizations</a> to reflect <a href="https://discuss.dev.twitch.tv/c/announcements" target="_blank">cover art powered by IGDB</a>.</p>

<p>Updates <a href="https://dev.twitch.tv/docs/product-lifecycle">Product Lifecycle</a> to include <a href="https://discuss.dev.twitch.tv/t/deprecation-of-twitch-api-event-endpoints-that-supported-websub-based-webhooks/35137" target="_blank">the deprecation</a> of a few Twitch API endpoints that supported WebSub-based webhooks.</p>

### 2021‑11‑23

<p>Added the following chat and moderation APIs that let developers create experiences that help broadcasters combat harassment and hate raids.</p>

<table>
  <thead>
    <tr>
      <th>What do you want to do?</th>
      <th>How to do it…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ban users or put them in a timeout</td>
      <td>Send a <a href="https://dev.twitch.tv/docs/api/reference#ban-user">POST /moderation/bans</a> request.<br><br>You can also <a href="https://dev.twitch.tv/docs/api/reference#unban-user">remove</a> a ban or timeout.</td>
    </tr>
    <tr>
      <td>Block terms that the broadcaster doesn’t want used in their chat room</td>
      <td>Send a <a href="https://dev.twitch.tv/docs/api/reference#add-blocked-term">POST /moderation/blocked_terms</a> request.<br><br>You can also <a href="https://dev.twitch.tv/docs/api/reference#get-blocked-terms">get</a> a list of blocked terms and <a href="https://dev.twitch.tv/docs/api/reference#remove-blocked-term">delete</a> blocked terms.</td>
    </tr>
    <tr>
      <td>Update the broadcaster’s AutoMod settings</td>
      <td>Send a <a href="https://dev.twitch.tv/docs/api/reference#update-automod-settings">PUT /moderation/automod/settings</a> request.<br><br>You can also <a href="https://dev.twitch.tv/docs/api/reference#get-automod-settings">get</a> a list of the current AutoMod settings.</td>
    </tr>
    <tr>
      <td>Update the broadcaster’s chat settings</td>
      <td>Send a <a href="https://dev.twitch.tv/docs/api/reference#update-chat-settings">PATCH /chat/settings</a> request.<br><br>You can also <a href="https://dev.twitch.tv/docs/api/reference#get-chat-settings">get</a> a list of the current chat settings.</td>
    </tr>
  </tbody>
</table>

### 2021‑11‑09

<p>Reorganization of EventSub documentation, moving <a href="https://dev.twitch.tv/docs/eventsub/handling-webhook-events">handling events</a> to a dedicated page.</p>

<p>Explicitly including the “Content-Type: application/json” header in <a href="https://dev.twitch.tv/docs/api/reference">API reference</a> examples.</p>

### 2021‑10‑27

<p><a href="https://dev.twitch.tv/docs/companies">Organization Management</a> updated to reflect IGDB will power Twitch game cover art as of November 17, 2021.</p>

### 2021‑10‑20

<p>Added documenation for Twitch’s <a href="https://dev.twitch.tv/docs/cli">command-line interface</a> (CLI).</p>

### 2021‑10‑01

<p>Added the <code class="highlighter-rouge">points</code> field to the <a href="https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions">Get Broadcaster Subscriptions</a> response. This field provides the current number of subscriber points earned by this broadcaster.</p>

### 2021‑09‑30

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Policy 2.12</a> has been added in regards to defining the domains from which Twitch Extensions can load content. More information is available in the announcement, <a href="https://discuss.dev.twitch.tv/c/announcements/13" target="_blank">New Extensions policy for Content Security Policy (CSP) directives and timeline for enforcement</a>.</p>

<p><a href="https://dev.twitch.tv/docs/extensions">Get started with Twitch Extensions</a> - “Restrictions on content” section updated to reflect Extensions policy 2.12 and the timeline mentioned in the announcement.</p>

### 2021‑09‑29

<p><a href="https://dev.twitch.tv/docs/drops">Drops Guide</a> received minor updates.</p>

### 2021‑09‑24

<p>Reformatted Goals <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types">EventSub Subscription Types</a> for consistency.</p>

<p>Retitled the “Get Live Channels” to “<a href="https://dev.twitch.tv/docs/api/reference#get-extension-live-channels">Get Extension Live Channels</a>” to clarify the endpoint is specific to Extensions activated on live channels.</p>

### 2021‑09‑16

<p>Decommissioned WebSub-based webhooks, which resulted in the following documentation changes:</p>

<ul>
  <li>Removed the <strong>Get Webhook Subscriptions</strong> endpoint from the <a href="https://dev.twitch.tv/docs/api/reference">reference</a>.</li>
  <li>Deleted the Webhooks Guide and Webhooks Reference topics.</li>
  <li>Updated the <a href="https://dev.twitch.tv/docs/product-lifecycle">Product Lifecycle</a> topic to note the date that WebSub-based webhooks was decommissioned.</li>
</ul>

### 2021‑09‑15

<p>The Creator Goals feature is now generally available. Broadcasters create goals to generate hype in their community, and it provides the community a way to support the channel. Goals can be daily goals, subathons, or anything in between. For information about using the API to get goals or receive notifications about goals, see <a href="https://dev.twitch.tv/docs/api/goals">Creator Goals</a>.</p>

### 2021‑09‑10

<p>Minor updates to address <a href="https://github.com/twitchdev/issues/issues?q=is%3Aissue+is%3Aopen+label%3A%22product%3A+docs%22" target="_blank">GitHub Issues</a>.</p>

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a> – Directions to access Drops Analytics has been updated and the “Top Streamers” report has been removed.</p>

### 2021‑09‑01

<p>Added the Creator Goals API, which returns active goals that broadcasters create on Twitch. Broadcasters create these goals to generate hype in their community, and it provides the community a way to support the channel. Goals can be daily goals, subathons, or anything in between. For more information, see <a href="https://dev.twitch.tv/docs/api/goals">Creator Goals</a>.</p>

### 2021‑08‑30

<p><a href="https://dev.twitch.tv/docs/api/guide">Twitch API Guide</a> - Technical concepts in this guide have been updated or added to for further clarification.</p>

<p><a href="https://dev.twitch.tv/docs/embed">Embedding Twitch</a> - Updated to include that certain features may be disabled if the embedded iframe is obscured.</p>

<p><a href="https://dev.twitch.tv/docs/embed/video-and-clips">Embedding Video and Clips</a> - Updated description for <code class="highlighter-rouge">seek</code> function and added the SEEK event.</p>

### 2021‑08‑20

<p>Updated examples for <a href="https://dev.twitch.tv/docs/authentication/validate-tokens">validating</a> and <a href="https://dev.twitch.tv/docs/authentication/revoke-tokens">revoking</a> OAuth tokens.</p>

<p>Updated <a href="https://dev.twitch.tv/docs/extensions/building#extension-helper-library">Extension Helper Library</a> to clarify that all HTML files should include the Extension Helper.</p>

### 2021‑08‑13

<p>Added the following fields to the <a href="https://dev.twitch.tv/docs/api/reference#get-channel-emotes">Get Channel Emotes</a>, <a href="https://dev.twitch.tv/docs/api/reference#get-global-emotes">Get Global Emotes</a>, and <a href="https://dev.twitch.tv/docs/api/reference#get-emote-sets">Get Emote Sets</a> endpoints.</p>

<ul>
  <li><code class="highlighter-rouge">format</code> — The formats that the emote is available in. For example, PNG or animated GIF.</li>
  <li><code class="highlighter-rouge">scale</code> — The sizes that the emote is available in. For example, 1.0 (small).</li>
  <li><code class="highlighter-rouge">theme_mode</code> — The background themes that the emote is available in. For example, light.</li>
  <li><code class="highlighter-rouge">template</code> — The URL template that you use to create a URL for fetching the emote.</li>
</ul>

<p>For information about how to use these fields, see <a href="https://dev.twitch.tv/docs/irc/emotes">Twitch Emotes</a>.</p>

<p>Added the following to the <a href="https://dev.twitch.tv/docs/irc">Chatbots &amp; IRC Guide</a>.</p>

<ul>
  <li>Existing site-wide rate limit for verified bots</li>
  <li>Clarification in the <code class="highlighter-rouge">JOIN</code> section regarding expected behavior when exceeding rate limits for joining channels</li>
</ul>

### 2021‑07‑30

<p><a href="https://dev.twitch.tv/docs/api">Get Started with the Twitch API</a> - This API guide has been updated to use the Twitch CLI and simplify how to retrieve an OAuth token to improve the getting started experience.</p>

### 2021‑07‑27

<p>The Create and Delete Follows API endpoints have been removed. See the <a href="https://discuss.dev.twitch.tv/t/deprecation-of-create-and-delete-follows-api-endpoints/32351" target="_blank">Deprecation of Create and Delete Follows API Endpoints</a> announcement for more information.</p>

### 2021‑07‑26

<p><a href="https://dev.twitch.tv/docs/irc#verified-bots">Twitch Chat Guide</a> - Updated information regarding verified chatbots including rate limits. Known bots have been removed. More information can be found in the <a href="https://discuss.dev.twitch.tv/t/an-update-for-the-delayed-bot-verification-request-process/32325" target="_blank">chatbot verification update announcement</a>.</p>

### 2021‑07‑23

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-banned-users">Get Banned Users</a> and “Get Banned Events” updated to include ban reason and information for the moderator who initiated the ban.</p>

<p><a href="https://dev.twitch.tv/docs/irc/emotes">Twitch Emotes Guide</a> - Added to document how developers can customize Twitch Emote image URLs to optimize their rendering in third-party applications.</p>

<p>With the addition of the guide above, the “Chatbots &amp; IRC” navigation item has been retitled to “Chat &amp; Chatbots” to include a broader range of chat topics.</p>

### 2021‑07‑15

<p><a href="https://dev.twitch.tv/docs/api/migration">v5 Migration Guide</a> - Updated to include additional migration paths and indicated endpoints that are not supported beyond v5.</p>

### 2021‑07‑13

<p><a href="https://dev.twitch.tv/docs/extensions/frontend-api-usage">Using the Twitch API in an Extension Front End</a> - Added to describe how to a JWT can be used to make Twitch API requests from an Extension front end.</p>

<p>The following Extension-related Twitch API endpoints have been added:</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extension-configuration-segment">Get Extension Configuration Segment</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#set-extension-configuration-segment">Set Extension Configuration Segment</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#set-extension-required-configuration">Set Extension Required Configuration</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#send-extension-pubsub-message">Send Extension PubSub Message</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extension-live-channels">Get Extension Live Channels</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extension-secrets">Get Extension Secrets</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#create-extension-secret">Create Extension Secret</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#send-extension-chat-message">Send Extension Chat Message</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extensions">Get Extensions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-released-extensions">Get Released Extensions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extension-bits-products">Get Extension Bits Products</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#update-extension-bits-product">Update Extension Bits Product</a></li>
</ul>


### 2021‑07‑02

<p><a href="https://dev.twitch.tv/docs/irc/tags">Twitch IRC: Tags</a> - Minor updates, deprecated tags removed, and chat replies added.</p>

### 2021‑06‑30

<p>Enhanced Experiences and Event-based Drops are now generally available.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements">Get Drops Entitlements</a> - Updated to include <code class="highlighter-rouge">fulfillment_status</code>.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements">Update Drops Entitlements</a> - Added to the Twitch API reference.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#userauthorizationgrant">User Authorization Grant</a> EventSub subscription type added as v1.</p>

<p><a href="https://dev.twitch.tv/docs/drops">Drops</a> guide - Minor changes and updates regarding the additions above.</p>

### 2021‑06‑25

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#dropentitlementgrant">Drop Entitlement Grant</a> EventSub subscription type added.</p>

<p>Update regarding the temporary pause of chatbot verification added to the <a href="https://dev.twitch.tv/docs/irc#verified-bots">Twitch Chat Guide</a>.</p>

### 2021‑06‑17

<p><a href="https://dev.twitch.tv/docs/api/reference#get-channel-chat-badges">Get Channel Chat Badges</a> - Now supports OAuth app access tokens in addition to OAuth user access tokens.</p>

<p>EventSub - <a href="https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-end-event">Channel Subscription End Event</a> added <code class="highlighter-rouge">tier</code> and <code class="highlighter-rouge">is_gift</code>.</p>

<p><a href="https://dev.twitch.tv/docs/authentication/scopes">Authentication</a> - The existing <code class="highlighter-rouge">user:read:email </code> scope has been added.</p>

### 2021‑06‑15

<p>Twitch API endpoints added for Twitch channel stream schedule.</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule">Get Channel Stream Schedule</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-channel-icalendar">Get Channel iCalendar</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule">Update Channel Stream Schedule</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment">Create Channel Stream Schedule Segment</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment">Update Channel Stream Schedule Segment</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#delete-channel-stream-schedule-segment">Delete Channel Stream Schedule Segment</a></li>
</ul>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptionmessage">Channel Subscription Message</a> has moved from public beta to v1.</p>

### 2021‑06‑11

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptiongift">Channel Subscription Gift</a> has moved from public beta to v1.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference#get-videos">Get Videos</a> updated to explicitly mention the 500 results limit when specifying <code class="highlighter-rouge">game_id</code>.</p>

### 2021‑06‑08

<p>Twitch API endpoints added for Twitch Emotes.</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-channel-emotes">Get Channel Emotes</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-global-emotes">Get Global Emotes</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-emote-sets">Get Emote Sets</a></li>
</ul>

### 2021‑06‑07

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptionmessage">Channel Subscription Message</a> EventSub subscription type added as a public beta.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#extensionbits_transactioncreate">Extension Bits Transaction Create</a> EventSub subscription type has moved from public beta to version 1.</p>

### 2021‑06‑03

<p>Channel Subscription Gift EventSub subscription type - Added <code class="highlighter-rouge">is_anonymous</code> boolean to the event.</p>

<p><a href="https://dev.twitch.tv/docs/pubsub#example-automod-queue-message">AutoMod Queue</a> and <a href="https://dev.twitch.tv/docs/pubsub#example-user-moderation-notification-message">User Moderation Notifications</a> PubSub topics - Examples updated for accuracy.</p>

<p>Several <a href="https://github.com/twitchdev/issues/issues?q=is%3Aissue+is%3Aopen+label%3A%22product%3A+docs%22" target="_blank">GitHub Issues</a> resolved for documentation.</p>

### 2021‑06‑02

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions">Get Broadcaster Subscriptions</a> - <code class="highlighter-rouge">total</code> subscription count added to the response.</p>

### 2021‑05‑28

<p>Twitch API endpoints have been added for chat badges.</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-channel-chat-badges">Get Channel Chat Badges</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-global-chat-badges">Get Global Chat Badges</a></li>
</ul>

<p>EventSub subscription type updates.</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptionend">Channel Subscription End</a> has moved from public beta to v1. This was previously known as “Channel Unsubscribe.”</li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptiongift">Channel Subscription Gift</a> has been added as a public beta.</li>
</ul>

### 2021‑05‑24

<p><a href="https://dev.twitch.tv/docs/api/reference#get-polls">Polls</a> and <a href="https://dev.twitch.tv/docs/api/reference#get-predictions">Channel Points Predictions</a> Twitch API endpoints have moved from public beta to general availability.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpollbegin">Polls</a> and <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpredictionbegin">Channel Points Predictions</a> EventSub subscription types have moved from public beta to version 1.</p>

<p>AutoMod Queue and User Moderation Notification topics added to <a href="https://dev.twitch.tv/docs/pubsub">PubSub reference</a>.</p>

### 2021‑05‑21

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#extensionbits_transactioncreate">Extension Bits Transaction Create</a> EventSub subscription type has been added as a public beta.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference/#create-custom-rewards">Channel Points Custom Rewards</a> - The API reference for Custom Rewards endpoints has been updated for consistency and to clarify conditional requirements for body parameters. For example, <code class="highlighter-rouge">max_per_stream</code> is required if a value for <code class="highlighter-rouge">is_max_per_stream_enabled</code> is also provided.</p>

### 2021‑05‑14

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelpredictionlock">Channel Prediction Lock</a> EventSub subscription type - corrected the name of the lock timestamp to <code class="highlighter-rouge">locked_at</code>.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelpredictionend">Channel Prediction End</a> EventSub subscription type - removed the <code class="highlighter-rouge">locked_at</code> field due to edge cases with Predictions that are cancelled or closed early.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription">Create EventSub Subscription</a> and <a href="https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions">Get EventSub Subscriptions</a> - <code class="highlighter-rouge">limit</code> removed following the new <a href="https://discuss.dev.twitch.tv/t/eventsub-subscription-limit-cost-based-system-and-limit-field-deprecation/31377" target="_blank">EventSub subscription limit cost-based system</a>.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference#get-channel-information">Get Channel Information</a> - Added <code class="highlighter-rouge">delay</code> to return values table and example payload.</p>

### 2021‑05‑12

<p><a href="https://dev.twitch.tv/docs/api/reference#manage-held-automod-messages">Manage Held AutoMod Messages</a> – Added to the Twitch API reference.</p>

<p><a href="https://dev.twitch.tv/docs/authentication/scopes">Authentication</a> - <code class="highlighter-rouge">moderator:manage:automod</code> scope added for <a href="https://dev.twitch.tv/docs/api/reference#manage-held-automod-messages">Manage Held AutoMod Messages</a>.</p>

### 2021‑05‑06

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscriptionend">Channel Subscription End</a> EventSub subscription type has been added as a public beta.</p>

<p><em>This entry has been updated, the subscription type has been renamed from “Channel Unsubscribe” to “Channel Subscription End” after moving from beta to v1.</em></p>

### 2021‑05‑03

<p>Twitch API endpoints added for polls and Channel Points Predictions as a public beta.</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-polls">Get Polls</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#create-poll">Create Poll</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#end-poll">End Poll</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-predictions">Get Predictions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#create-prediction">Create Prediction</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#end-prediction">End Prediction</a></li>
</ul>

<p>EventSub subscriptions types added for polls and Channel Points Predictions as a public beta.</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpollbegin">Channel Poll Begin</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpollprogress">Channel Poll Progress</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpollend">Channel Poll End</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpredictionbegin">Channel Prediction Begin</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpredictionprogress">Channel Prediction Progress</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpredictionlock">Channel Prediction Lock</a></li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelpredictionend">Channel Prediction End</a></li>
</ul>

### 2021‑04‑30

<p><a href="https://dev.twitch.tv/docs/">Overview page</a> - New information and organization.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#public-beta-program">EventSub Subscriptions Types</a> - Added information regarding the expected availability of EventSub subscription types when released as a public beta.</p>

### 2021‑04‑26

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#userauthorizationrevoke">Notification Example</a> for <code class="highlighter-rouge">user.authorization.revoke</code> updated to show the cost is 1.</p>

<p><a href="https://dev.twitch.tv/docs/embed">Embedding Twitch</a> - Minor documentation updates.</p>

### 2021‑04‑20

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-followed-streams">Get Followed Streams</a> - Added to the Twitch API reference.</p>

<p><a href="https://dev.twitch.tv/docs/authentication/scopes">Authentication</a> - <code class="highlighter-rouge">user:read:follows</code> scope added for <a href="https://dev.twitch.tv/docs/api/reference/#get-followed-streams">Get Followed Streams</a>.</p>

<p><a href="https://dev.twitch.tv/docs/api/migration">v5 Migration Guide</a> - Updated to mention <a href="https://dev.twitch.tv/docs/api/reference/#get-followed-streams">Get Followed Streams</a> equivalence.</p>

### 2021‑04‑15

<p><a href="https://dev.twitch.tv/docs/api/reference/#modify-channel-information">Modify Channel Information</a> – <code class="highlighter-rouge">delay</code> added as an optional body parameter.</p>

<p>New API response fields added</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-streams">Get Streams</a>: <code class="highlighter-rouge">is_mature</code></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-clips">Get Clips</a>: <code class="highlighter-rouge">duration</code></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#search-channels">Search Channels</a>: <code class="highlighter-rouge">game_name</code></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-videos">Get Videos</a>: <code class="highlighter-rouge">stream_id</code></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-videos">Get Videos</a>: <code class="highlighter-rouge">muted_segments</code> array of objects with <code class="highlighter-rouge">duration</code> and <code class="highlighter-rouge">offset</code></li>
</ul>

### 2021‑04‑09

<p><a href="https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions">Get Broadcaster Subscriptions</a> - Added context for how a Twitch Extension can retrieve this information.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference#update-user">Update User</a> - Clarifying why <code class="highlighter-rouge">description</code> is optional and what results if not provided.</p>

<p>Extensions Reference - Parameter tables reordered to match the order they should be passed into their respective functions.</p>

<p>Other minor corrections.</p>

### 2021‑04‑05

<p>Twitch Quarterly Insights has been decommissioned and removed in favor of <a href="https://dev.twitch.tv/docs/insights#game-developer-analytics">Game Developer Analytics</a>.</p>

### 2021‑03‑31

<p>Viewer Heartbeat Service (VHS) v5 endpoints removed in association with the decommission of legacy Drops.</p>

### 2021‑03‑30

<p><a href="https://dev.twitch.tv/docs/companies">Organizations</a> updated to include information regarding joining multiple organizations, as well as minor updates.</p>

### 2021‑03‑26

<p>EventSub’s <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelmoderatoradd">Channel Moderator Add</a> and <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelmoderatorremove">Channel Moderator Remove</a> subscriptions types have been moved from beta to v1.</p>

<p>Added associated Twitch API endpoints to the <a href="https://dev.twitch.tv/docs/authentication/scopes">scopes section</a> of the Authentication guide.</p>

<p>Minor design improvements.</p>

### 2021‑03‑19

<p><a href="https://dev.twitch.tv/docs/api/reference#get-drops-entitlements">Get Drops Entitlements</a></p>
<ul>
  <li>The maximum value for the number of items return via the <code class="highlighter-rouge">first</code> parameter has been increased to 1000.</li>
  <li>Pagination updated for accuracy in the the return values table and the example payload.</li>
</ul>

<p>Webhooks example payloads updated for accuracy.</p>

<p>Miscellaneous corrections.</p>

### 2021‑03‑12

<p>Added <a href="https://dev.twitch.tv/docs/api/reference#check-user-subscription">Check User Subscription</a> to the Twitch API.</p>

<p>EventSub’s cost-based system for <a href="https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits">subscription limits</a> has been added. Thanks for the feedback on <a href="https://discuss.dev.twitch.tv/t/rfc-0014-eventsub-subscription-limit-changes/30312/">RFC 0014</a>.</p>

<p>Improved the instructions and information regarding the creation of Twitch applications for <a href="https://dev.twitch.tv/docs/drops">Drops campaigns</a>.</p>

<p>Several documentation corrections received through GitHub Issues have been resolved.</p>

### 2021‑03‑04

<p>Twitch API</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-channel-teams">Get Channel Teams</a> has been added to the API reference.</li>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-teams">Get Teams</a> has been added to the API reference.</li>
  <li>The v5 migration guide has been updated to include the new Get Teams endpoint.</li>
</ul>

<p>EventSub</p>
<ul>
  <li>The <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelraid">Channel Raid</a> subscription type has been moved from beta to v1.</li>
  <li>The <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelmoderatoradd">Channel Moderator Add</a> and <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelmoderatorremove">Channel Moderator Remove</a> subscription types have been added as a public beta.</li>
</ul>

### 2021‑02‑26

<p>EventSub updates</p>
<ul>
  <li>Added clarification in steps 4-5 on “Create a subscription.”</li>
  <li><a href="https://dev.twitch.tv/docs/eventsub/eventsub-reference#channel-follow-event">Channel Follow</a> now includes the timestamp of when the follow occurred.</li>
  <li>Clarified the <code class="highlighter-rouge">id</code> field in the <a href="https://dev.twitch.tv/docs/eventsub/eventsub-reference#stream-online-event">EventSub Stream Online</a> notification payload.</li>
</ul>

<p>The following endpoints were updated to use the <code class="highlighter-rouge">channel:manage:broadcast</code> scope. The previous scope remains valid.</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#modify-channel-information">Modify Channel Information</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#create-stream-marker">Create Stream Marker</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#replace-stream-tags">Replace Stream Tags</a></li>
</ul>

<p>Updated the v5 Video Upload Guide introduction for visitors looking for information regarding uploads via the Creator Dashboard.</p>

<p>Fixed broken links in <a href="https://dev.twitch.tv/docs/irc">chat</a> references.</p>

<p>Removed the “Create Entitlement Grants Upload URL” Twitch API endpoint associated with a previous version of Twitch Drops.</p>

### 2021‑02‑22

<p>Legacy Drops have been removed following the <a href="https://discuss.dev.twitch.tv/t/announcing-a-new-version-of-drops-for-game-developers/27771" target="_blank">announced decommission</a>.</p>

### 2021‑02‑19

<p><code class="highlighter-rouge">status</code> added to EventSub <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types">subscription objects</a>.</p>

<p>Scope for <a href="https://dev.twitch.tv/docs/pubsub#topics">Channel Subscriptions</a> in PubSub has been updated to <code class="highlighter-rouge">channel:read:subscriptions</code>. Previous scope remains valid.</p>

<p><a href="https://twitchchannelpoints.devpost.com/?utm_source=twitch&utm_medium=docs" target="_blank">Channel Points Hackathon</a> banner added.</p>

<p>Further clarification for <code class="highlighter-rouge">game_id</code> and <code class="highlighter-rouge">title</code> added for <a href="https://dev.twitch.tv/docs/api/reference#modify-channel-information">Modify Channel Information</a>.</p>

<p>Minor updates to the <a href="https://dev.twitch.tv/docs/api/guide">API guide</a> and <a href="https://dev.twitch.tv/docs/irc">Chat guide</a>.</p>

### 2021‑02‑12

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelban">EventSub Channel Ban</a> v1 now includes moderator information, reason for ban, and timeout duration if the ban was a timeout.</p>

<p><a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelunban">EventSub Channel Unban</a> v1 now includes moderator information.</p>

<p>Section 7.5 of the <a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines and Policies</a> has been removed following the <a href="https://discuss.dev.twitch.tv/t/extension-policy-update-moderation/30215">original announcement</a>.</p>

### 2021‑02‑09

<p>In EventSub, the authorization scopes allowed for all Channel Point subscription types have been updated to accept <code class="highlighter-rouge">channel:read:redemptions</code> or <code class="highlighter-rouge">channel:manage:redemptions</code>.</p>

<p>Updated <a href="https://dev.twitch.tv/docs/api/reference#get-users">Get Users</a> to correctly document <code class="highlighter-rouge">created_at</code> in the example.</p>

<p>Minor editorial updates to the <a href="https://dev.twitch.tv/docs/extensions/monetization">Extensions Monetization Guide</a>.</p>

### 2021‑02‑05

<p>Eventsub API endpoints have been moved to the <a href="https://dev.twitch.tv/docs/api/reference">API reference</a>.</p>

<p>A message regarding the deprecation of Twitch Quarterly Insights has been added to <a href="https://dev.twitch.tv/docs/insights">Insights</a> following the recent <a href="https://discuss.dev.twitch.tv/t/deprecation-of-the-quarterly-insights-report/30266/2" target="_blank">announcement</a>.</p>

<p>Explicitly stating in <a href="https://dev.twitch.tv/docs/extensions">Extensions</a> that files should be zipped together as opposed to zipping the directory containing the files.</p>

<p>Miscellaneous UserVoice and GitHub Issues addressed.</p>

### 2021‑01‑29

<p>EventSub</p>
<ul>
  <li>The Channel Raid subscription type has been added as a public beta.</li>
  <li>The <code class="highlighter-rouge">started_at</code> timestamp has been added to the <a href="https://dev.twitch.tv/docs/eventsub/eventsub-reference#stream-online-event">Stream Online Event</a>.</li>
</ul>

<p>A note about removing <a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Policy 7.5</a> has been added since Twitch Extensions no longer load for banned users.</p>

<p>The <a href="https://dev.twitch.tv/docs/drops">Drops guide</a> now includes a section regarding thoughtful naming of campaigns and rewards.</p>

<p><a href="https://dev.twitch.tv/docs/product-lifecycle">Product Lifecycle</a> has been updated to include definitions for tagging functionality in the documentation.</p>

### 2021‑01‑28

<p><code class="highlighter-rouge">broadcaster_login</code> and/or <code class="highlighter-rouge">user_login</code> added to multiple API endpoint payloads that already return user ID and display name.</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard">GET helix/bits/leaderboard</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-custom-reward">GET helix/channel_points/custom_rewards</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#update-custom-reward">PATCH helix/channel_points/custom_rewards</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#create-custom-rewards">POST helix/channel_points/custom_rewards</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-custom-reward-redemption">GET helix/channel_points/custom_rewards/redemptions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#update-redemption-status">PATCH helix/channel_points/custom_rewards/redemptions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-extension-transactions">GET helix/extensions/transactions</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-banned-users">GET helix/moderation/banned</a></li>
  <li>GET helix/moderation/banned/events</li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-moderators">GET helix/moderation/moderators</a></li>
  <li>GET helix/moderation/moderators/events</li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#search-channels">GET helix/search/channels</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-streams">GET helix/streams</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-stream-markers">GET helix/streams/markers</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-videos">GET helix/videos</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-users-follows">GET helix/users/follows</a></li>
</ul>

### 2021‑01‑22

<p>EventSub:</p>
<ul>
  <li>Corrected <code class="highlighter-rouge">status</code> value in examples.</li>
  <li>Clarified requirements for <code class="highlighter-rouge">secret</code>.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/authentication">Authentication</a> updates:</p>
<ul>
  <li>Correctly state a <code class="highlighter-rouge">400 Bad Request</code> is returned when attempting to revoke an invalid token, rather than a <code class="highlighter-rouge">200 OK</code>.</li>
  <li>Scope information corrections and updates.</li>
</ul>

<p>Additional updates:</p>
<ul>
  <li><code class="highlighter-rouge">offset</code> removed from Get Channel Followers endpoint in v5 as it is no longer supported. <code class="highlighter-rouge">cursor</code> should be used for pagination.</li>
  <li>Extensions tutorial updated to use Gists instead of image.</li>
  <li>Several UserVoice suggestions and GitHub Issues addressed.</li>
</ul>

### 2021‑01‑15

<p>New Twitch API endpoints available:</p>
<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-channel-editors">Get Channel Editors</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#delete-videos">Delete Videos</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-user-block-list">Get User Block List</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#block-user">Block User</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#unblock-user">Unblock User</a></li>
</ul>

<p>The new scopes for these endpoints have also been added to <a href="https://dev.twitch.tv/docs/authentication/scopes">Authentication</a>. Updated the descriptions of existing scopes for consistency and accuracy.</p>
<ul>
  <li><code class="highlighter-rouge">channel:read:editors</code></li>
  <li><code class="highlighter-rouge">channel:manage:videos</code></li>
  <li><code class="highlighter-rouge">user:read:blocked_users</code></li>
  <li><code class="highlighter-rouge">user:manage:blocked_users</code></li>
</ul>

<p><a href="https://dev.twitch.tv/docs/api/migration">v5 migration guide</a> updates:</p>
<ul>
  <li>New v5 scope mappings have been added for the above endpoints. See <code class="highlighter-rouge">channel_editor</code>, <code class="highlighter-rouge">channel_read</code>, <code class="highlighter-rouge">user_blocks_read</code>, and <code class="highlighter-rouge">user_blocks_edit</code>.</li>
  <li>Five endpoint equivalence definitions have been added for the above endpoints.</li>
</ul>

<p><code class="highlighter-rouge">giantbomb_id</code> set to 0 in the v5 Get Top Games response example to reflect a <a href="https://discuss.dev.twitch.tv/t/legacy-endpoints-returning-0-for-giantbomb-id-following-igdb-migration/29125">game data migration</a>.</p>

### 2021‑01‑08

<p>EventSub updates:</p>
<ul>
  <li>Added support for filtering by <code class="highlighter-rouge">type</code>.</li>
  <li>Added user login to notification payloads.</li>
</ul>

<p>Added <code class="highlighter-rouge">twitch://broadcast</code> mobile deeplink to broadcast a specific category.</p>

<p>Embed updates:</p>
<ul>
  <li><code class="highlighter-rouge">enableCaptions()</code> function, <code class="highlighter-rouge">disableCaptions()</code> function, and <code class="highlighter-rouge">Twitch.Player.CAPTIONS</code> event added.</li>
  <li><code class="highlighter-rouge">sandbox</code> added for embedded chat.</li>
  <li><code class="highlighter-rouge">getPlaybackStats()</code> function and a description of the <code class="highlighter-rouge">PlaybackStats</code> object added back into the documentation.</li>
  <li><code class="highlighter-rouge">autoplay</code> documentation updated to note the default value is <code class="highlighter-rouge">false</code>.</li>
  <li>Removed <code class="highlighter-rouge">frameborder</code> and <code class="highlighter-rouge">scrolling</code> from Twitch embed examples as these were deprecated in HTML5.</li>
</ul>

<p>Feedback and bug reports:</p>
<ul>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/39162130-bring-back-a-function-similar-to-getplaybackstats">Bring back a function similar to .getPlaybackStats()</a></li>
  <li><a href="https://github.com/twitchdev/issues/issues/268">Channel Update Notification Example Contradicts Channel Update Event Documentation</a></li>
  <li><a href="https://github.com/twitchdev/issues/issues/281">Typo in “Chatbots &amp; IRC Guide” section</a> and <a href="https://twitch.uservoice.com/forums/310213/suggestions/42309586">typo</a></li>
  <li><a href="https://github.com/twitchdev/issues/issues/277">Google Analytics in extensions: example not up to date with GA changes</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/42381577">Typo in EventSub Guide page</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/42301396">Unclear Mention of Regex for Bits Parameter</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/42230230">[TYPO] EventSub channel.update docs</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/40632823">Deprecated attribute</a></li>
</ul>

### 2020‑12‑18

<p>Updated auth validation sample with values and the <code class="highlighter-rouge">expires_in</code> field.</p>

<p><a href="https://twitch.uservoice.com/forums/310213/suggestions/41541955">Updated JavaScript helper examples</a> to use  <code class="highlighter-rouge">window.Twitch.ext</code>.</p>

<p>Clarifcation for linking accounts for time-based Drops.</p>

<p>Miscellaneous API reference fixes.</p>

### 2020‑12‑17

<p>Details for retriving ingest servers have been moved to the top-level <a href="https://dev.twitch.tv/docs/video-broadcast">Video Broadcasting</a> section. This includes the launch of “<a href="https://dev.twitch.tv/docs/video-broadcast/reference#get-ingest-servers">Get Ingest Servers</a>” to replace its deprecated version previously found in v5.</p>

### 2020‑12‑04

<p>UserVoice feedback fixes:</p>
<ul>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/39847735-docs-missing-first-pagination-on-api-s-that-suppor">Further documenting endpoints that support <code class="highlighter-rouge">first</code> and <code class="highlighter-rouge">after</code></a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/40479460-get-users-doesn-t-mention-that-an-app-access-token">“Get Users” now mentions an app access token can be used</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/40803598-helix-users-docs-showing-optional-scope-as-require"><code class="highlighter-rouge">user:read:email</code> corrected to be optional</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/41036398-broadcaster-name-not-noted-in-return-values-of-get"><code class="highlighter-rouge">broadcaster_name</code> documented for “Get Channel Information”</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/41954035-typo">Backend typo</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/41904073-broken-link">Subscriptions webhook link fixed</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/41774833-fix-usage-untimeout-documentation-note"><code class="highlighter-rouge">usage_untimeout</code> correction</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/40366696">OAuth procedure links are clickable</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213-developers/suggestions/42060712-possible-error-typo">Possible typo for separating scopes</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/39847549">Fixed example payload for Get All Chat Emoticons</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/39848104">Added clarification for expected language query parameters and response values</a></li>
  <li><a href="https://twitch.uservoice.com/forums/310213/suggestions/39848128">Fixed link to configuration service reference</a></li>
</ul>

<p>Miscellaneous fixes:</p>
<ul>
  <li>Removed duplicate search results</li>
  <li>Displaying more search results</li>
  <li>Provided the full accept header in the v5 “Requests” section</li>
  <li>Changed the date format in the changelog to YYYY-MM-DD</li>
</ul>

### 2020‑12‑01

<p>Added <code class="highlighter-rouge">progress</code> field to Hype Train <a href="https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types">EventSub subscription types</a>.</p>

### 2020‑11‑30

<p>Corrections and edits to the <a href="https://dev.twitch.tv/docs/eventsub">EventSub</a> documentation.
Fixed a typo for “msg-param-gift-months” under <a href="https://dev.twitch.tv/docs/irc/tags#usernotice-tags">IRC usernotices</a>.</p>

### 2020‑11‑19

<p>Corrections and edits to the <a href="https://dev.twitch.tv/docs/eventsub">EventSub</a> documentation.</p>

<p>Updated <a href="https://dev.twitch.tv/docs/insights#drops-analytics-beta">Drops Analytics</a> image.</p>

<p>Changed type for <code class="highlighter-rouge">pagination</code> <a href="https://dev.twitch.tv/docs/api/reference">response field</a> to be “object containing a string”.</p>

<p>Corrections and edits to <a href="https://dev.twitch.tv/docs/authentication/#scopes">scopes</a> documentation.</p>

### 2020‑11‑13

<p>Added documentation for <a href="https://dev.twitch.tv/docs/eventsub">EventSub</a>.</p>

<p>Added Channel Points API to the <a href="https://dev.twitch.tv/docs/api/reference">API Reference</a>.</p>

<p>Added a v5 to Twitch API <a href="https://dev.twitch.tv/docs/api/migration">migration guide</a>.</p>

### 2020‑11‑04

<p>Added information about <a href="https://dev.twitch.tv/insights/#drops-analytics-beta">Drops Analytics</a> to documentation.</p>

### 2020‑10‑29

<p>Removed CurseForge references from docs.</p>

<p>API Reference:</p>

<ul>
  <li>Corrected token requirement for <a href="https://dev.twitch.tv/docs/api/reference#get-stream-tags">Get Stream Tags</a>.</li>
  <li>Made sub-section ordering consistent, listing query parameters before body parameters.</li>
  <li>Corrected <a href="https://dev.twitch.tv/docs/api/reference#modify-channel-information">Modify Channel Information</a> documentation which had body parameters listed as query parameters.</li>
</ul>

<p>Pub Sub:</p>

<ul>
  <li>Updated user notices for multi-month subscriptions.</li>
  <li>Added sample code for multi-month subscriptions.</li>
  <li>Updated the topic for <a href="https://dev.twitch.tv/docs/pubsub#topics">chat moderator actions</a>.</li>
</ul>

### 2020‑10‑26

<p><a href="https://dev.twitch.tv/docs/api/reference">API Reference</a>:</p>

<ul>
  <li>Fixed issue causing apostrophes to show as random characters.</li>
  <li>Removed duplicate entry for Get Stream Tags.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/authentication">Authentication Guide</a>:</p>

<ul>
  <li>Added maximum OAuth token limits.</li>
  <li>Added <code class="highlighter-rouge">channel:read:redemptions</code> scope.</li>
  <li>Corrected the spelling of <code class="highlighter-rouge">channel:manage:broadcast</code>.</li>
</ul>

<p>Clarified instructions for supplying parameters in the Webhooks Reference.</p>

<p>Clarified limits in the Webhooks Guide.</p>

<p>In the <a href="https://dev.twitch.tv/docs/extensions">Extensions Guide</a>, corrected the environment variable <code class="highlighter-rouge">HTTPS=true</code> for create-react-app.</p>

<p> </p>

### 2020‑10‑09

<p>Updates to the <a href="https://dev.twitch.tv/docs/api/reference">API Reference</a>:</p>

<ul>
  <li>Made example code consistent.</li>
  <li>Eliminated duplicate entry for the Get Stream Tags endpoint.</li>
  <li>Fixed typos.</li>
</ul>

<p>Fixed a typo in the <a href="https://dev.twitch.tv/docs/authentication#scopes">channel:manage:broadcast</a> scope.</p>

<p>Removed the Glossary.</p>

### 2020‑09‑23

<p>Removed links to internal documents in <a href="https://dev.twitch.tv/docs/extensions/increasing-feedback">Increase Feedback in Extensions</a>.</p>

### 2020‑09‑17

<p>Added to the v5 API Get Channel Subscribers endpoint the information that if a user in the subscribers list has been banned, the subscription information will be provided, but the user object will have a value of <code class="highlighter-rouge">null</code>.</p>

### 2020‑09‑15

<p>Edited all documentation to replace the terms “blacklist” and “whitelist” with “denylist” and “allowlist”.</p>

<p>Edited and redesigned the top-level page:</p>

<ul>
  <li>Fixed broken links.</li>
  <li>Added links to UserVoice and GitHub for feedback and support.</li>
  <li>Removed outdated screenshots.</li>
  <li>Removed redundant links.</li>
</ul>

<p>Added to the <a href="https://dev.twitch.tv/docs/api/reference/#create-clip">Get Clips</a> endpoint documentation that clips are returned sorted by view count, in descending order.</p>

### 2020‑09‑14

<p>Updated the following endpoints to make clear they are about Bits codes:</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference/#get-code-status">Get Code Status</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#redeem-code">Redeem Code</a></li>
</ul>

<p>Updated Extensions documentation to say that layout needs to accommodate variable height rather than fixed at 700 pixels.</p>

### 2020‑09‑12

<p>Added discussion of subscription status support to the <a href="https://dev.twitch.tv/docs/extensions/monetization">Extensions Monetization</a> documentation.</p>

<p>Clarified language in the <a href="https://dev.twitch.tv/docs/api/reference#create-clip">Create Clip</a> endpoint documentation.</p>

### 2020‑09‑07

<p>Documented <a href="https://dev.twitch.tv/docs/irc/authenticate-bot">authentication</a> and <a href="https://dev.twitch.tv/docs/irc#rate-limits">Join rate limits</a> for <a href="https://dev.twitch.tv/docs/irc">chat</a>.</p>

<p>Removed documentation for chat rooms, because the feature is deprecated.</p>

### 2020‑08‑28

<p>Removed mention of a webhook for Drops because it is not yet available.</p>

### 2020‑08‑25

<p>Updated the <a href="https://dev.twitch.tv/docs/api/reference#create-clip">API Reference</a> to note that the clips service returns a maximum of 1000 clips.</p>

<p>Removed the deprecated information about rate limits when there is no token from the <a href="https://dev.twitch.tv/docs/api/guide">API Guide</a>.</p>

<p>Added pagination information to the <a href="https://dev.twitch.tv/docs/api/reference#get-drops-entitlements">Get Drops Entitlements</a> endpoint documentation.</p>

### 2020‑08‑21

<p>Fixed code sample for Events-based Drops.</p>

### 2020‑08‑20

<p>Updated Authorization section for the <a href="https://dev.twitch.tv/docs/api/reference/#create-clip">Get Clips</a> endpoint to indicate that a user access token is required.</p>

### 2020‑08‑18

<ul>
  <li>Published <a href="https://dev.twitch.tv/docs/drops">Drops 2.0</a> documentation</li>
  <li>added <code class="highlighter-rouge">Get Drops Entitlements</code> to the <a href="https://dev.twitch.tv/docs/api/reference">API reference</a></li>
</ul>

### 2020‑08‑13

<p>Added a new section to our Extension Submission Best Practices: <a href="https://dev.twitch.tv/docs/extensions/submission-best-practices/#template-for-a-helpful-walkthrough-guide-and-change-log"><em>Template for a helpful Walkthrough Guide and Change Log</em></a></p>

### 2020‑07‑30

<p>Updated Marketing and Developer <a href="https://dev.twitch.tv/docs/companies#user-roles">User Roles</a>.</p>

### 2020‑07‑30

<p>Updated Webhooks documentation to describe notification timeout.</p>

<p>Changed documentation of <a href="https://dev.twitch.tv/docs/api/reference#start-commercial">Start Commercial</a> response field from retryAfter to retry_after.</p>

### 2020‑07‑23

<p>Updated Extensions documentation to reflect new process for required review channels.</p>

### 2020‑07‑21

<p>Addressed issues in the API reference for the following endpoints:</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-stream-key">Get Stream Key</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-channel-information">Get Channel Information</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#modify-channel-information">Modify Channel Information</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#delete-user-follows">Delete User Follows</a></li>
  <li><a href="https://dev.twitch.tv/docs/api/reference#get-hype-train-events">Get Hype Train Events</a></li>
</ul>

### 2020‑07‑06

<p>Added required authorization for the <a href="https://dev.twitch.tv/docs/api/reference/#get-streams">Get Streams</a> endpoint and updated sample code.</p>

### 2020‑07‑01

<p>Added new fields to the <a href="https://dev.twitch.tv/docs/pubsub/#example-channel-subscriptions-event-message" target="_blank">Channel Subscriptions Event Pubsub topic</a> and a new <a href="https://dev.twitch.tv/docs/irc/tags#usernotice-tags">USERNOTICE tag parameter</a> in support of Multi-Month Subscription Gifting.</p>

### 2020‑06‑22

<p>Updated the <a href="https://dev.twitch.tv/docs/authentication">Authentication Guide</a> to mention that developers can provide multiple redirect URIs.</p>

### 2020‑06‑22

<p>Bug fixes in the <a href="https://dev.twitch.tv/docs/api/reference">API Reference</a>.</p>

### 2020‑06‑18

<p>Added new endpoints to the <a href="https://dev.twitch.tv/docs/api/reference">API Reference</a> and Webhooks Reference:</p>

<ul>
  <li>Get Channel Information</li>
  <li>Modify Channel Information</li>
  <li>Search Channels</li>
  <li>Search Categories</li>
  <li>Get Stream Key</li>
  <li>Start Commercial</li>
  <li>Create User Follows</li>
  <li>Delete User Follows</li>
  <li>Get Cheermotes</li>
</ul>

<p>Added new functionality to the API: the <a href="https://dev.twitch.tv/docs/api/reference#get-hype-train-events">Hype Train API</a>.</p>

### 2020‑06‑15

<p>Added links to <a href="https://dev.twitch.tv/docs/api/guide#rate-limits">rate limits documentation</a> to the API Reference.</p>

### 2020‑06‑03

<p>Clarified the definition of Subscription denied in the Webhooks Guide.</p>

### 2020‑05‑12

<p>Removed documentation of MODE and NAMES in the <a href="https://dev.twitch.tv/docs/irc/membership">IRC documentation</a> because they have not functioned correctly for some time and will not be supported.</p>

### 2020‑05‑08

<p><a href="https://dev.twitch.tv/docs/drops">Drops Guide</a>: Updated <a href="https://dev.twitch.tv/docs/api/reference/#create-entitlement-grants-upload-url">Create Entitlement Grants Upload URL</a> example to include Client ID.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">API Reference</a>: Updated all example requests to include Client ID and token in Authorization header, as per new OAuth requirement.</p>

### 2020‑05‑04

<p>Fixed a bug in the API Reference. The optional scope for the <a href="https://dev.twitch.tv/docs/api/reference#get-users">Get Users</a> endpoint should be <code class="highlighter-rouge">user:read:email</code>.</p>

### 2020‑05‑01

<p>Updated the <a href="https://dev.twitch.tv/docs/api/reference">Twitch API Reference</a> to reflect that OAuth is now mandated.</p>

<p>Updated the <a href="https://dev.twitch.tv/docs/authentication">Authentication Guide</a> to include new OAuth scopes. </p>

<p>Updated the Webhooks Reference to show that authorization is now required authorization for every web hook.</p>

### 2020‑04‑27

<p>Updated Extensions Best Practices: </p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/extensions/submission-best-practices#commerce-in-extensions">Commerce Best Practices</a> </li>
  <li><a href="https://dev.twitch.tv/docs/extensions/submission-best-practices#bits-in-extensions">Bits Best Practices</a></li>
</ul>

<p>Updated the <a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies/">Extensions Guidelines and Policies</a> page for Content and Commerce.</p>

### 2020‑04‑20

<p>Updated <a href="https://dev.twitch.tv/docs/drops">Drops</a> documentation to align with UI changes.</p>

### 2020‑04‑01

<p>Deleted documentation of these deprecated v5 endpoints:</p>

<ul>
  <li>Get Channel Communities</li>
  <li>Set Channel Communities</li>
  <li>Delete Channel from Communities</li>
</ul>

<p>Corrected URL for <a href="https://dev.twitch.tv/docs/api/reference/#get-extension-transactions">Get Extension Transaction</a> endpoint.</p>

### 2020‑03‑30

<p>Updated definition of “language” in v5 Streams API Reference.</p>

### 2020‑03‑27

<p>Published new <a href="https://dev.twitch.tv/docs/extensions">Extensions Guide</a>.</p>

### 2020‑03‑18

<p>Updates to the <a href="https://dev.twitch.tv/docs/embed">Embedding Twitch</a> documentation: </p>

<ul>
  <li>Added new <code class="highlighter-rouge">parent</code> parameter.</li>
  <li>Removed deprecated <code class="highlighter-rouge">getPlaybackStats</code> method.</li>
  <li>Removed references to the <code class="highlighter-rouge">font-size</code> option for everywhere embeds.</li>
</ul>

### 2020‑03‑10

<p>Updated the Extensions <a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Guidelines &amp; Policies</a> to add Moderation.</p>

### 2020‑02‑25

<p>Edited the following endpoints in the v. 5 API Reference:</p>

<ul>
  <li>v5 Get Live Streams
    <ul>
      <li>Removed <code class="highlighter-rouge">_total</code> field</li>
      <li>Documented that the offset is capped at 900</li>
    </ul>
  </li>
  <li>v5 Get Followed Streams
    <ul>
      <li>Removed <code class="highlighter-rouge">_total</code> field</li>
      <li>Documented that the offset is capped at 900</li>
    </ul>
  </li>
</ul>

<p>Edited the <a href="https://dev.twitch.tv/docs/api/reference/#get-game-analytics">Get Game Analytics</a> endpoint to note that we only return data for the previous 365 days.</p>

<p>Updated documentation for the sunset of Premieres.</p>

### 2020‑02‑14

<p>Updated the <code class="highlighter-rouge">game_id</code> parameter in the <a href="https://dev.twitch.tv/docs/api/reference#get-streams">Get Streams</a> endpoint from up to 100 IDs to up to 10 IDs.</p>

<p>Documented the <code class="highlighter-rouge">isBitsEnabled</code> feature flag in the Extensions Reference.</p>

<p>Removed the link to the deprecated form to increase webhook subscription limits.</p>

<p>Added <code class="highlighter-rouge">gifter_id</code> and <code class="highlighter-rouge">gifter_name</code> fields to the Get Broadcaster Subscriptions <a href="https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions">endpoint</a> and webhook.</p>

### 2020‑02‑13

<ul>
  <li>Removed the <code class="highlighter-rouge">live</code> query string parameter from the Search Games v5 endpoint documentation.</li>
  <li>Removed the <code class="highlighter-rouge">popularity</code> response field from the Search Games v5 endpoint and the Get Top Games v5 endpoint documentation.</li>
</ul>

### 2020‑01‑24

<p>Updates to PubSub <a href="https://dev.twitch.tv/docs/pubsub/#topics">documentation</a>: </p>

<ul>
  <li>Added Chat feature</li>
  <li>Added Required Scope for <code class="highlighter-rouge">channel-bits-events-v1</code> and <code class="highlighter-rouge">channel-bits-badge-unlocks</code></li>
  <li>Removed <code class="highlighter-rouge">channel-commerce-events-v1</code> because it is deprecated</li>
</ul>

### 2020‑01‑10

<ul>
  <li>Updated documentation to reflect that OAuth is the preferred method of authentication.</li>
  <li>Removed documentation for chat rooms because the feature is deprecated.</li>
</ul>

### 2020‑01‑08

<p>Extensions tutorials are now live on the site.</p>

### 2019‑12‑17

<p><strong>Webhooks Reference</strong></p>

<ul>
  <li>Updated description of Subscribe / Unsubscribe call to be more accurate about response codes and authentication required.</li>
  <li>Small syntax / formatting tweaks in the JSON examples.</li>
  <li>Mention the authenticated scopes needed for various authenticated webhooks.</li>
</ul>

<p><strong>Webhooks Guide</strong></p>

<ul>
  <li>Clarified how retries are performed and how we handle non-2xx response codes from clients.</li>
  <li>Provided insight into the implementation of a handler for verification according to the W3C websub spec.</li>
</ul>

### 2019‑12‑16

<p>Added the <a href="https://dev.twitch.tv/docs/pubsub#topics">Channel Points</a> PubSub topic.</p>

### 2019‑12‑05

<p>Added chat rooms to the <a href="https://dev.twitch.tv/docs/product-lifecycle">Product Lifecycle</a> page as deprecated.</p>

### 2019‑12‑02

<p>Updated the <a href="https://dev.twitch.tv/docs/authentication/getting-tokens-oidc">Getting Tokens OIDC</a> doc to note that the <code class="highlighter-rouge">email</code> and <code class="highlighter-rouge">email_verified</code> claims will soon be gated by <code class="highlighter-rouge">user:read:email</code> scope.</p>

### 2019‑10‑22

<p>Updated review section in <a href="https://dev.twitch.tv/docs/extensions/life-cycle" target="_blank">Extensions Life Cycle Management</a> doc to include review SLA.</p>

### 2019‑10‑16

<p>Added Product Lifecycle page to the site.</p>

### 2019‑09‑28

<p>Added links to the Developer Rig in these pages: </p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/extensions/#hello-world">https://dev.twitch.tv/docs/extensions/#hello-world</a></li>
  <li><a href="https://dev.twitch.tv/docs/extensions/rig/" target="_blank">https://dev.twitch.tv/docs/extensions/rig/</a></li>
</ul>

### 2019‑09‑11

<p>Added <a href="https://dev.twitch.tv/docs/extensions/increasing-feedback" target="_blank">Increasing Feedback in Extensions</a>.</p>

### 2019‑09‑10

<p>Removed communities-related data fields from <a href="https://dev.twitch.tv/docs/api/reference/#get-streams" target="_blank">Get Streams</a> and Get Streams Metadata endpoints. These fields are no longer supported.</p>

<p>Merged Get Broadcaster’s Subscribers into <a href="https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions" target="_blank">Get Broadcaster Subscriptions</a> because they both return the subscribers to a channel. </p>

<p>Added <a href="https://dev.twitch.tv/docs/extensions/load-testing-extensions" target="_blank">Load Testing Extensions Using Locust and Elastic Beanstalk</a> document.</p>

<p>Added <a href="https://dev.twitch.tv/docs/extensions/submission-best-practices" target="_blank">Submission Best Practices</a> for Extensions.</p>

### 2019‑09‑06

<p>Corrected <code class="highlighter-rouge">msg_id</code> parameter type in Check AutoMod Status from integer to string.</p>

### 2019‑09‑04

<p>Added an updated Glossary.</p>

### 2019‑08‑22

<p>Edited the payload example in Topic: Subscription Events.</p>

### 2019‑08‑14

<p>Edited optional Create Stream Marker parameter <em><a href="https://dev.twitch.tv/docs/api/reference/#create-stream-marker" target="_blank">description</a></em> to include a max length of 140 characters.</p>

<p>Removed “Increasing Feedback in Extensions”.</p>

### 2019‑08‑07

<p>Update Mobile Deep Links</p>

### 2019‑08‑05

<p>Updated Organizations (formerly “Companies”).</p>

<p>Updated Extensions: Developer Rig</p>

<p>Updated Extensions: Increasing Feedback in Your Extension.</p>

### 2019‑08‑04

<p>Add RBAC info to “Companies” (now “Organizations”)</p>

### 2019‑07‑31

<p>Added 2.10 and 2.11 to Extensions Guidelines and Policies.</p>

<p>Updates to “Extensions: Designing” guide.</p>

### 2019‑07‑30

<p>Add RBAC information to Extensions Life Cycle Management and Monetization. </p>

### 2019‑07‑29

<p>Corrected URL for endpoint “Get Moderator Events”.</p>

### 2019‑07‑22

<p>Extensions update - reset file ordering</p>

### 2019‑07‑19

<p>Retry adding 3 new Extensions docs (A/B Testing, Google Analytics, &amp; Increasing Feedback)</p>

### 2019‑07‑18

<p>DA-430: Add three new Extensions documents: Using A/B Testing in Extensions, Using Google Analytics in Extensions, and Increasing Feedback in Extensions. Also made minor change in Drops (meaning of “retries”).</p>

### 2019‑07‑09

<p>Updated “Chatbots &amp; IRC” docs (Getting Started, Guide, Membership, Commands, Tags, &amp; Chat Rooms), except for “msg-ID Tags”.</p>

<p>Updated all “Embed” docs (Introduction, Embed Chat, Embed Video &amp; Clips, &amp; Embed Everything).</p>

### 2019‑06‑27

<p>Added documentation for Get Subscription Events <a href="https://dev.twitch.tv/docs/api/reference" target="_blank">endpoint</a>.</p>

<p>Added documentation for Subscription Events webhook.</p>

### 2019‑06‑25

<p>Documented the new <a href="https://dev.twitch.tv/docs/api/reference" target="_blank">Moderation API</a>.</p>

<p>Documented two new webhooks:</p>

<ul>
  <li>Moderator Change Events</li>
  <li>Channel Ban Change Events</li>
</ul>

### 2019‑06‑21

<p>Insights &amp; Analytics updates (twice today)</p>

### 2019‑06‑20

<p>Changed “position” to “policies” in Extensions: Guidelines and Policies, section 6.6.</p>

### 2019‑06‑19

<p>Added clarification to the <a href="https://dev.twitch.tv/docs/api/reference/#get-users">Get Users</a> endpoint in the Twitch API Reference that the limit of 100 IDs and login names is a total limit, not 100 of each.</p>

<p>Changes to Helper Bits in the Extensions Reference:</p>

<ul>
  <li>The field should be “<code class="highlighter-rouge">exp</code>” rather than “<code class="highlighter-rouge">expires</code>”.</li>
  <li>Documented the <code class="highlighter-rouge">domainID</code> object.</li>
  <li>Edited definition of the <code class="highlighter-rouge">product</code> object.</li>
</ul>

### 2019‑06‑13

<p><a href="https://dev.twitch.tv/docs/extensions/life-cycle">Extensions Life Cycle Management</a>: Added section on Control Security Policy (CSP)</p>

### 2019‑06‑07

<p>Removed deprecated Channel Feed API Reference.</p>

### 2019‑06‑06

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>:</p>

<ul>
  <li>Added policy 6.2.8.</li>
</ul>

### 2019‑06‑04

<p>Added Get Extension Transactions to the <a href="https://dev.twitch.tv/docs/api" target="_blank">Twitch API Reference</a>.</p>

<p>Added Extension Transaction Created to the Webhooks Reference.</p>

### 2019‑05‑30

<p>Updated v5 API Guide: New third-party development will be limited to the API versions Kraken v5 and Helix. Limitation of new development will be enforced on client ID created on or after 5/31/2019.</p>

### 2019‑05‑08

<p>Removed orphan Bits Code Redemption Guide and added the content to the <a href="https://dev.twitch.tv/docs/api/reference/#redeem-code" target="_blank">API Reference</a>.</p>

<p>Fixed date errors in the <a href="https://dev.twitch.tv/docs/change-log" target="_blank">changelog</a>.</p>

### 2019‑05‑07

<p>Fixed code formatting errors in several endpoints.</p>

<p>Updated Configuration Service documentation.</p>

<p>Removed Topic: Extension Analytics and Topic: Game Analytics from the Webhooks Reference because the endpoint is returning invalid data.</p>

### 2019‑04‑19

<p>Removed note that Webhooks parameters must appear in alphabetical order because that restriction no longer exists.</p>

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>:</p>

<ul>
  <li>Added policies 1.5, 3.4, and 4.6.2.</li>
  <li>Appended 4.3 to mention Emotes usage and beta program.</li>
  <li>Appended 4.4 to mention advertising beta program.</li>
  <li>Removed 4.6.1 (Off-site links must be related to the extension’s core functionality).</li>
  <li>Removed 4.6.3 (Off-site links must be included within your URL allowlist).</li>
  <li>Previous 5.2 and 5.3 reworked and appended to mention the commerce beta program.</li>
</ul>

### 2019‑04‑18

<p>Updated link to download the Developer Rig for Windows.</p>

<p>Updated the v5 API Reference to indicate that the version is deprecated.</p>

### 2019‑04‑16

<p>Deleted Communities Reference from v5 API because it is deprecated.</p>

### 2019‑04‑15

<p>Video: Updated v5 Video Upload Guide and v5 Video Reference to note that you must be a Partner or Affiliate to upload VODs.</p>

### 2019‑03‑27

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Added note that undocumented tags can be added/removed at any time. Also, tags may appear in any order. So, developers should write code to parse tags individually and ignore unrecognized tags.</p>

### 2019‑03‑26

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Added new <code class="highlighter-rouge">badge-info</code> parameter to GLOBALUSERSTATE, PRIVMSG, USERNOTICE, and USERSTATE.</p>

### 2019‑03‑18

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a> and <a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: Changes based on the new Developer Rig UI. Updated “Hello World” example in <em>Getting Started</em>.</p>

### 2019‑03‑15

<p>Extensions Reference: Added information related to Monetization.</p>

<p><a href="https://dev.twitch.tv/docs/extensions/monetization">Extensions Monetization Guide</a>{: target=”_blank” (formerly Bits in Extensions), <a href="https://dev.twitch.tv/docs/extensions/life-cycle">Extensions Life Cycle Management</a>: Added Monetization tab to Extensions manager, for selecting Bits support and/or new subscription status support, and for going to the monetization onboarding process.</p>

### 2019‑03‑14

<p>Websub: Updated documentation to make it clear that the order of query parameters matters.</p>

<p><a href="https://dev.twitch.tv/docs/extensions/monetization">Bits</a>: Small edits to documentation, for clarity.</p>

### 2019‑03‑11

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Added several more <code class="highlighter-rouge">msg-param</code> parameters (for USERNOTICE).</p>

### 2019‑03‑08

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Deleted <code class="highlighter-rouge">broadcaster-lang</code> (from ROOMSTATE). Added several more valid values for the <code class="highlighter-rouge">msg-id</code> field (for USERNOTICE).</p>

### 2019‑03‑07

<p><a href="https://dev.twitch.tv/docs/extensions">Extensions doc set</a>: Many changes. New version of <em>Getting Started with Extensions</em>. New Extensions manager UI (see <em>Extensions Life Cycle Management</em>).</p>

### 2019‑02‑21

<p>Insights &amp; Analytics: Added mod author analytics.</p>

### 2019‑02‑08

<p><a href="https://dev.twitch.tv/docs/pubsub/#topics">PubSub</a>: Added topic <code class="highlighter-rouge">channel-bits-events-v2</code>. Removed deprecated <code class="highlighter-rouge">months</code> field. Added new <code class="highlighter-rouge">cumulative-months</code> and <code class="highlighter-rouge">streak-months</code> fields.</p>

### 2019‑02‑04

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: For <a href="https://dev.twitch.tv/docs/irc/tags#usernotice-tags">USERNOTICE</a>, added three fields (<code class="highlighter-rouge">msg-param-cumulative-months</code>, <code class="highlighter-rouge">msg-param-should-share-streak</code>, <code class="highlighter-rouge">msg-param-streak-months</code>) and changed when <code class="highlighter-rouge">msg-param-months</code> is sent.</p>

### 2019‑01‑30

<p><a href="https://dev.twitch.tv/docs/authentication/scopes">Apps &amp; Authentication</a>: Added the scope <code class="highlighter-rouge">channel:read:subscriptions</code>.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Added new endpoints: Get Broadcaster Subscriptions and Get User Subscriptions.</p>

### 2019‑01‑28

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication</a>: Clarified language around deprecation of Twitch API v. 5.</p>

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>: Clarified using the native Developer Rig (beta).</p>

### 2019‑01‑22

<p>Extensions Reference: Added <code class="highlighter-rouge">locale</code> parameter to “Client Query Parameters.”</p>

### 2019‑01‑18

<p><a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: Added section on “Enabling 2FA.”</p>

### 2019‑01‑17

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Added new endpoints: Replace Stream Tags, Get Stream Tags, and Get All Stream Tags. Updated Get Streams endpoint to document new tags functionality.</p>

<p><a href="https://dev.twitch.tv/docs/mobile-deeplinks/#deep-link-formats">Mobile Deep Links</a>: Added deep links for category tags and live-stream tags.</p>

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Several clarifications, based on user feedback. Revised definitions of data fields that use device IDs. New section on “Counting Device IDs.”</p>

### 2018‑12‑21

<p><a href="https://dev.twitch.tv/docs/irc">Getting Started with Chatbots &amp; IRC</a>: New version of this doc.</p>

### 2018‑12‑19

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>: New version of this doc.</p>

### 2018‑12‑17

<p><a href="https://dev.twitch.tv/docs/api/reference/#get-code-status">Code Redemption API</a>: New reference document.</p>

### 2018‑11‑30

<p>Extensions Reference: Moved Bits-related reference information (JS helper functions) here, to consolidate all Extensions reference info in one place. The <a href="https://dev.twitch.tv/docs/extensions/monetization">Bits in Extensions</a> document is now purely a guide.</p>

### 2018‑11‑28

<p><a href="https://dev.twitch.tv/docs/companies">Company Management</a>: New document on registering companies and managing users in them. Company registration is required before you can manage games on Twitch or create Drops campaigns.</p>

### 2018‑11‑27

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>, <a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: Deleted information about the Developer Rig “local mode” (no longer available).</p>

### 2018‑11‑14

<p><a href="https://dev.twitch.tv/docs/authentication/getting-tokens-oidc">Apps &amp; Authentication: Getting Tokens: OIDC</a>: Added claims and UserInfo endpoint.</p>

<p><a href="https://dev.twitch.tv/docs/irc">Chatbots &amp; IRC Guide</a>: Added scopes for /vip, /unvip, and /vips commands.</p>

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: In <a href="https://dev.twitch.tv/docs/irc/tags#usernotice-tags">USERNOTICE</a>, added anonsubgift.</p>

<p><a href="https://dev.twitch.tv/docs/pubsub">PubSub Guide</a>: Added sample message for anonsubgift.</p>

### 2018‑11‑02

<p><a href="https://dev.twitch.tv/docs/irc/msg-id">Twitch IRC Capability: msd-ID Tags</a>: This new document (under Chatbots &amp; IRC) contains a complete (lengthy) list of all <code class="highlighter-rouge">msg-id</code> tags that apply to the <code class="highlighter-rouge">NOTICE</code> (Twitch Commands) and <code class="highlighter-rouge">NOTICE</code> (Twitch Chat Rooms) commands.</p>

<p>Extensions Reference: New JWT schema field, <code class="highlighter-rouge">is_unlinked</code>.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: New description and example in Get Webhook Subscriptions, which requires a Bearer token.</p>

### 2018‑10‑24

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>: New version of this document.</p>

### 2018‑10‑23

<p>New Twitch API Reference, New Twitch API: Webhooks Reference: Added a display-name response field to several endpoints and webhooks. Endpoints affected: Get Bits Leaderboard, Get Clips, Get Streams, Get Streams Metadata, Get Stream Markers, Get Users Follows, Get Videos. Webhooks affected: Stream Changed, User Follows.</p>

<p>Building Extensions: Added information about pre-release disclosures. 3/7/19 update: Moved to <a href="https://dev.twitch.tv/docs/extensions/life-cycle">Extensions Life Cycle Mangement</a>.</p>

### 2018‑10‑22

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication Guide</a>: In “<a href="https://dev.twitch.tv/docs/authentication#passing-the-access-token-to-the-api">Types of Tokens</a>,” added a clarification about bearer tokens.</p>

<p><a href="https://dev.twitch.tv/docs/api/guide">New Twitch API Guide</a>: New information in “<a href="https://dev.twitch.tv/docs/api/guide/#rate-limits">Rate Limits.</a>”</p>

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>: Added the new Extensions Developer Sandbox.</p>

### 2018‑10‑16

<p>Extensions: Onboarding is now required only for monetization (Bits).</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: The rig no longer requires prior onboarding.</li>
  <li><a href="https://dev.twitch.tv/docs/extensions/monetization">Bits in Extensions Guide</a>: A new onboarding procedure is described.</li>
</ul>

### 2018‑10‑10

<p>Extensions: Added the new Configuration Service. See:</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/extensions/building">Building Extensions</a>: New “Configuration Service” section.</li>
  <li>Extensions Reference:
    <ul>
      <li>Three new endpoints (Set Extension Configuration Segment, Get Extension Channel Configuration, Get Extension Configuration Segment).</li>
      <li>New Twitch Extensions configuration helper functions (see “Helper: Configuration”).</li>
      <li>Change to when Set Extension Required Configuration can be used.</li>
    </ul>
  </li>
  <li><a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: New Configuration Service tab.</li>
  <li>Releasing &amp; Maintaining Extensions: Many updates. 3/7/19 update: Renamed <a href="https://dev.twitch.tv/docs/extensions/life-cycle">Extensions Life Cycle Management</a>.</li>
</ul>

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Added printing a poster view of Twitch Quarterly Insights.</p>

### 2018‑10‑09

<p><a href="https://dev.twitch.tv/docs/irc/commands">Chatbots &amp; IRC: Twitch Commands</a>, <a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Added CLEARMSG, single-message removal on a channel.</p>

### 2018‑10‑02

<p><a href="https://dev.twitch.tv/docs/drops">Drops Guide</a>: Added recommendations for campaigns.</p>

<p>Webhooks Reference: Clarified the functionality of the Stream Changed webhook (formerly called Stream Up/Down).</p>

### 2018‑10‑01

<p><a href="https://dev.twitch.tv/docs/drops">Drops Guide</a>: New functionality for creating and using items, with a new Item Manager page and new fields for items. See especially the section on using campaigns.</p>

### 2018‑09‑28

<p><a href="https://dev.twitch.tv/docs/extensions/rig">Extensions Developer Rig</a>: New document focusing on the rig. Also see changes to the Developer Rig section of <a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>.</p>

<p>Extensions Reference: New <code class="highlighter-rouge">hostingInfo</code> property in the <code class="highlighter-rouge">onContext</code> JS helper function. New <code class="highlighter-rouge">onHighlightChanged</code> JS helper function.</p>

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication Guide</a>: The <code class="highlighter-rouge">chat_login</code> scope is deprecated. See the section on new scopes for chat and PubSub.</p>

<p><a href="https://dev.twitch.tv/docs/irc">Chatbots &amp; IRC Guide</a>: New section on Scopes for IRC Commands.</p>

<p><a href="https://dev.twitch.tv/docs/mobile-deeplinks">Mobile Deep Links</a>: New section on launching the Twitch app with universal links (recommended).</p>

### 2018‑09‑14

<p>New Twitch API: Webhooks Guide: There are changes to subscription limits. Each client ID can have at most 10,000 subscriptions. Also, you can subscribe to the same topic at most 3 times.</p>

### 2018‑09‑11

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: New optional query string parameters (<code class="highlighter-rouge">started_at</code> and <code class="highlighter-rouge">ended_at</code>) for <a href="https://dev.twitch.tv/docs/api/reference/#get-clips">Get Clips</a>.</p>

### 2018‑09‑07

<p>Extensions Reference: New JS helper function, <code class="highlighter-rouge">minimize</code>. See Helper: Actions.</p>

### 2018‑09‑06

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Added new endpoints, <a href="https://dev.twitch.tv/docs/api/reference/#create-stream-marker">Create Stream Marker</a> and <a href="https://dev.twitch.tv/docs/api/reference/#get-stream-markers">Get Stream Markers</a>.</p>

### 2018‑09‑04

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Added three new clips fields to <a href="https://dev.twitch.tv/docs/insights/#game-developer-analytics">game-developer analytics</a>.</p>

### 2018‑09‑03

<p><a href="https://dev.twitch.tv/docs/api">Getting Started with the New Twitch API</a>: When registering your app, the app name must not include “Twitch” (as an exact or fuzzy match), or registration will fail.</p>

### 2018‑08‑30

<p>Extensions (several docs): Added pop-out Extensions. Start reading <a href="https://dev.twitch.tv/docs/extensions/required-technical-background/#pop-out-extensions">here</a> in Required Technical Background (this links to relevant info elsewhere in the doc set).</p>

<p>Extensions Reference: Added Send Extension Chat Message endpoint and Helper: Feature Flags (JS helper functions).</p>

### 2018‑08‑21

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Added Twitch Quarterly Insights (fact sheet for games).</p>

### 2018‑08‑13

<p><a href="https://dev.twitch.tv/docs/extensions/building">Building Extensions</a>: Due to requirements recently communicated to us by Apple, Extensions support on iOS devices (including the ability to test on iOS) is now restricted to Apple Developer Program members. See “<a href="https://dev.twitch.tv/docs/extensions/building/#mobile-support">Mobile Support</a>.”</p>

<ul>
  <li>If you have released a mobile extension: Your extension no longer appears on iOS. Twitch will contact you soon about adding iOS support.</li>
  <li>If you develop a new mobile extension for iOS, please set up an Apple developer account (if you do not already have one), then contact Twitch (developer_support@twitch.tv) to add iOS support.</li>
</ul>

<p>Extensions Reference: In Helper: Extensions, added new property (<code class="highlighter-rouge">arePlayerControlsVisible</code>) to the <code class="highlighter-rouge">onContext</code> JS helper function.</p>

### 2018‑08‑07

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Added V2 of extension analytics.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Updated the <a href="https://dev.twitch.tv/docs/api/reference/#get-extension-analytics">Get Extension Analytics</a> endpoint for V2.</p>

<p>New Twitch API: Webhooks Reference: Added new webhook, Extension Analytics.</p>

### 2018‑08‑02

<p><a href="https://dev.twitch.tv/docs/irc/tags">Chatbots &amp; IRC: Twitch Tags</a>: Marked some parameters as deprecated (<code class="highlighter-rouge">subscriber</code>, <code class="highlighter-rouge">turbo</code>, and <code class="highlighter-rouge">user_type</code>). Use the <code class="highlighter-rouge">badges</code> parameter instead.</p>

### 2018‑07‑31

<p>New Twitch API Reference: Added Get Webhook Subscriptions endpoint.</p>

### 2018‑07‑27

<p><a href="https://dev.twitch.tv/docs/extensions/designing">Designing Extensions</a>: Added more guidance for all extensions and panel extensions.</p>

### 2018‑07‑20

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication: Guide</a>, <a href="https://dev.twitch.tv/docs/authentication/getting-tokens-oauth">Getting Tokens: OAuth</a>, &amp; <a href="https://dev.twitch.tv/docs/authentication/getting-tokens-oidc">Getting Tokens: OIDC</a>: Added <code class="highlighter-rouge">token_type</code> parameter (required value = <code class="highlighter-rouge">bearer</code>) in several places.</p>

### 2018‑07‑19

<p><a href="https://dev.twitch.tv/docs/extensions/monetization">Bits in Extensions</a>: New document.</p>

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>: Added Bits in Extensions requirements.</p>

### 2018‑07‑12

<p>Twitch API v5 Channel Feed Reference: Changed (deprecated) most endpoint responses.</p>

### 2018‑07‑06

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>, <a href="https://dev.twitch.tv/docs/extensions/building">Building Extensions</a>: Added information about the Twitch Developer Rig “local mode” (for local testing against mock, non-production endpoints).</p>

<p><a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>: Added a note about which versions of Android and iOS must be supported by mobile extensions.</p>

<p>Extensions Reference: Added two new fields to the <code class="highlighter-rouge">onContext</code> JS helper function (<code class="highlighter-rouge">isMuted</code>, <code class="highlighter-rouge">volume</code>).</p>

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication</a>: Split this large document into several smaller docs, to make it easier to read and find information.</p>

### 2018‑06‑22

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: Added V2 of game analytics.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Updated the <a href="https://dev.twitch.tv/docs/api/reference/#get-game-analytics">Get Game Analytics</a> endpoint, to enable selection of report version and date/time range.</p>

<p><a href="https://dev.twitch.tv/docs/irc">Chatbots &amp; IRC Guide</a>: Updated the information on “Connecting to Twitch IRC.”</p>

### 2018‑06‑19

<p>Extensions Reference: Expanded the definition of <code class="highlighter-rouge">onPositionChanged</code> JS helper function.</p>

<p><a href="https://dev.twitch.tv/docs/extensions/building">Building Extensions</a>: In “Local Test,” added information about the new Invite Only tab, for seeing allowlisted extensions in the Extensions Manager.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: Added three endpoints: Get User Extensions, Get User Active Extensions, Update User Installed Extensions.</p>

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication</a>: Added new scopes, for new endpoints.</p>

<p><a href="https://dev.twitch.tv/docs/embed/everything">Embedding Twitch: Everything</a>: For the <code class="highlighter-rouge">layout</code> parameter, changed the valid value from <code class="highlighter-rouge">video-and-chat</code> to <code class="highlighter-rouge">video-with-chat</code>.</p>

<p>Twitch API v5: In “Which API Version Can You Use?” indicated that there is no scheduled deletion date for v5.</p>

### 2018‑06‑07

<p><a href="https://dev.twitch.tv/docs/embed/video-and-clips">Embedding Video &amp; Clips</a>: In <code class="highlighter-rouge">setVideo</code>, added a new <code class="highlighter-rouge">Timestamp</code> parameter.</p>

<p><a href="https://dev.twitch.tv/docs/drops">Drops Guide</a>: In “Next: Notify the Viewer about Drops,” added GUID to URLs.</p>

### 2018‑06‑04

<p>Having Extensions Reviewed: Before you submit an extension for review, you now select a category under which your extension will be shown in the Extension Manager and upload an image for “discovery” purposes. 3/7/19 update: This document was deleted; information is in <a href="https://dev.twitch.tv/docs/extensions/life-cycle">Extensions Life Cycle Management</a>.</p>

### 2018‑05‑31

<p>Getting Started docs:</p>

<ul>
  <li><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>: Added links to new videos.</li>
  <li><a href="https://dev.twitch.tv/docs/irc">Getting Started with Chatbots &amp; IRC</a>: New doc.</li>
  <li><a href="https://dev.twitch.tv/docs/api">Getting Started with the New Twitch API</a>: New doc.</li>
</ul>

<p>Extensions Reference: Changes to Send Extension PubSub Message (messages can be sent globally), <code class="highlighter-rouge">listen</code> and <code class="highlighter-rouge">send</code> JS Helper functions, and Example JWT Payload.</p>



<p>New Twitch API: Webhooks Reference: Added two webhooks (User Changed, Game Analytics).</p>

<p><a href="https://dev.twitch.tv/docs/insights">Insights &amp; Analytics</a>: New doc, with information on both game developer analytics and extensions developer analytics. (Replaces the Game Developer Analytics doc.)</p>

### 2018‑05‑21

<p><a href="https://dev.twitch.tv/docs/embed">Embedding Twitch</a> and <a href="https://dev.twitch.tv/docs/irc">Chatbots &amp; IRC</a>: These large documents were spit into several smaller docs, to make it easier to read and find information.</p>

<p>Extensions Reference: The <code class="highlighter-rouge">onVisibilityChanged</code> JS helper function now works with component extensions.</p>

### 2018‑05‑15

<p><a href="https://dev.twitch.tv/docs/extensions">Getting Started with Extensions</a>: In “Procedure for Non-Twitch Partners/Affiliates,” the last step of beginning the onboarding process was changed.</p>

### 2018‑05‑09

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>:</p>

<ul>
  <li>In <a href="https://dev.twitch.tv/docs/api/reference/#create-clip">Create Clip</a>, an optional query string parameter was added, <code class="highlighter-rouge">has_delay</code>. This adds a delay before the clip is captured to account for the brief delay between the broadcaster’s stream and the viewer’s experience of that stream.</li>
</ul>

### 2018‑05‑02

<p><a href="https://dev.twitch.tv/docs/extensions">Extensions</a>: The Extensions Guide was split into several shorter docs. Look in the Extensions doc category.</p>

### 2018‑04‑29

<p>Updated <a href="https://dev.twitch.tv/docs/companies#how-to-register-an-organization">Organizations</a> documentation. </p>

### 2018‑04‑19

<p><a href="https://dev.twitch.tv/docs/embed/video-and-clips">Embedding Video and Clips</a>: In “Interactive Frames for Live Streams and VODs” &gt; “Optional Parameter,” the default of the parameter <code class="highlighter-rouge">playsinline</code> parameter was changed to <code class="highlighter-rouge">true</code>.</p>

<p>Extensions Guide: Video-component extensions were added. Broadcasters can activate up to six extensions at a time: 3 panel, 1 video overlay (full screen), and 2 video component (smaller).</p>

<p>Extensions Reference: Info was added about video-component extensions (new JS Helper function, <code class="highlighter-rouge">onPositionChanged</code>).</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: In Get Clip, 4 query params were added (<code class="highlighter-rouge">broadcaster_id</code>, <code class="highlighter-rouge">game_id</code>, <code class="highlighter-rouge">before</code>, <code class="highlighter-rouge">after</code>).</p>

### 2018‑04‑04

<p><a href="https://dev.twitch.tv/docs/embed/video-and-clips">Embedding Video and Clips</a>: In “Events Emitted by and Defined by the Player,” a new  <code class="highlighter-rouge">Twitch.Player.PLAYBACK_BLOCKED</code> event was added.</p>

<p><a href="https://dev.twitch.tv/docs/api/reference">New Twitch API Reference</a>: A “Resource” column was added to the summary table of endpoints, then endpoints in the doc were re-ordered to match the table (so endpoints for the same resource are in the same part of the doc).</p>

### 2018‑03‑29

<p><a href="https://dev.twitch.tv/docs/authentication">Apps &amp; Authentication Guide</a>: See new wording in “Validating Requests.”</p>

<p><a href="https://dev.twitch.tv/docs/embed/video-and-clips">Embedding Video and Clips</a>: In “Interactive Frames for Live Streams and VODs” &gt; “Events Emitted by and Defined by the Player,” a new <code class="highlighter-rouge">PLAYING</code> event was added and the definition of the <code class="highlighter-rouge">PLAY</code> event was changed.</p>

<p>Extensions Guide: In “Appendix B: Guidelines and Practices,” the policy for audio was revised: “Extensions can include audio only if they include controls which allow viewers to adjust the volume, and by default, these controls are set to off/muted.” 5/2/18 update: Now that the Extensions Guide is split up, this information is in <a href="https://dev.twitch.tv/docs/extensions/guidelines-and-policies">Extensions Guidelines &amp; Policies</a>.</p>

<p>Extensions Reference: Changes related to the introduction of dynamic anchors. Search for “anchor” in the doc.</p>


<!--END_SECTION:static-->

## Requirements

In order to run the project from a container we need `node>=16` and `npm>=7` installed on our development machines.

## Installation

Clone the package via `git`:

```shell
git clone git@github.com:0-vortex/javascript-malware-inspector.git
```

Go into the cloned repository and install `node` dependencies:

```shell
npm ci
```

## How to use

To develop locally just run:

```shell
npm start
```

## Contributing

This repository uses `husky` with pre-commit and message hooks. All you need to do after staging some files is to run:

```shell
npm run push
```
