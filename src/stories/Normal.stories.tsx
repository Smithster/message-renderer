import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Message, MessageRendererProvider } from "../../dist/esm/index.js";
import MessageGroup from "../index";
import { testUser } from "./commonTestData";
import Wrapper from "./Wrapper";

export default {
  title: "Message Types/Normal",
  component: MessageGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [Wrapper],
} as ComponentMeta<typeof MessageGroup>;

// eslint-disable-next-line func-style
const Template: ComponentStory<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  messages: [
    {
      "id": "1101622366137749574",
      "type": 0,
      "content": "Small update on expanded markdown <:Kermit:865566651017068554>\nWe had to roll it back yesterday to patch some issues. We will most likely be bringing it back ~~sometime next week.~~ soon <:KermitTPose:814341617234083871> \n\nHave a good, markdown-less weekend! <:KermitCloutGlasses:874106679321571428>\n\nAnimal fact of the week: a group of rhino is called a \"crash\" 🦏",
      "channel_id": "697138785317814292",
      "author": {
        "id": "933123872641921044",
        "username": "therealjethro",
        "global_name": "Jeff",
        "avatar": "e4d8c186d8900eed2ace6aed5cefe1c0",
        "discriminator": "0",
        "public_flags": 4604871,
        "avatar_decoration": "0f19f304614f253d56257ce1bbfcf357"
      },
      "attachments": [],
      "embeds": [],
      "mentions": [],
      "mention_roles": [],
      "pinned": false,
      "mention_everyone": false,
      "tts": false,
      "timestamp": "2023-04-28T21:33:59.241000+00:00",
      "edited_timestamp": "2023-05-04T16:50:42.356000+00:00",
      "flags": 1,
      "components": [],
      "reactions": [
        {
          "emoji": {
            "id": "1100159330264813638",
            "name": "frog_nae_nae",
            "animated": true
          },
          "count": 241,
          "count_details": {
            "burst": 0,
            "normal": 241
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": null,
            "name": "🦏"
          },
          "count": 272,
          "count_details": {
            "burst": 0,
            "normal": 272
          },
          "burst_colors": [],
          "me_burst": false,
          "me": true,
          "burst_count": 0
        }
      ]
    },
  ],
};

export const CodeBlock = Template.bind({});
CodeBlock.args = {
  messages: [
    {
      id: "1069241535809454201",
      type: 0,
      content:
        '```tsx\nexport const CodeBlock = styled.withConfig({ displayName: "code" })(\n  "md-code-block",\n  css({\n    display: "block",\n    overflowX: "auto",\n    borderRadius: 4,\n    fontSize: theme.fontSizes.m,\n    lineHeight: "1.125rem",\n    textIndent: 0,\n    whiteSpace: "pre-wrap",\n    backgroundColor: theme.colors.backgroundSecondary,\n    border: `1px solid ${theme.colors.backgroundTertiary}`,\n    marginTop: theme.space.medium,\n    padding: ".5em",\n    fontFamily: fonts,\n  })\n });\n```',
      channel_id: "993105555042357268",
      author: {
        id: "132819036282159104",
        username: "Mr. Quine",
        display_name: null,
        avatar: "3a30ffeeeb354950804d77ded94162d3",
        avatar_decoration: null,
        discriminator: "0001",
        public_flags: 4457220,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:04:07.684000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069241535033245696",
      referenced_message: null,
    },
  ],
};

export const Embed = Template.bind({});
Embed.args = {
  messages: [
    {
      id: "1013056935886590032",
      type: 0,
      content:
        "this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```",
      channel_id: "993210446096105522",
      author: {
        id: "398690824721924107",
        username: "AdvaithBot",
        display_name: null,
        avatar: "aa710e791ef95cec9bf23350cabfcd1f",
        avatar_decoration: null,
        discriminator: "2249",
        public_flags: 65536,
        bot: true,
      },
      attachments: [],
      embeds: [
        {
          type: "rich",
          url: "https://discordapp.com",
          title: "title ~~(did you know you can have markdown here too?)~~",
          description:
            "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
          color: 4994011,
          timestamp: "2022-08-27T12:05:51.251000+00:00",
          fields: [
            {
              name: "🤔",
              value: "some of these properties have certain limits...",
              inline: false,
            },
            {
              name: "😱",
              value: "try exceeding some of them!",
              inline: false,
            },
            {
              name: "🙄",
              value:
                "an informative error should show up, and this view will remain as-is until all issues are fixed",
              inline: false,
            },
            {
              name: ":thonkang:",
              value: "these last two",
              inline: true,
            },
            {
              name: ":thonkang:",
              value: "are inline fields",
              inline: true,
            },
          ],
          author: {
            name: "author name",
            url: "https://discordapp.com",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_icon_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          },
          image: {
            url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
            width: 256,
            height: 256,
          },
          thumbnail: {
            url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
            width: 256,
            height: 256,
          },
          footer: {
            text: "footer text",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_icon_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-08-27T12:06:35.203000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const YouTubeEmbed = Template.bind({});
YouTubeEmbed.args = {
  messages: [
    {
      id: "1065588769463484496",
      type: 0,
      content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [
        {
          type: "video",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          description:
            "The official video for “Never Gonna Give You Up” by Rick Astley\nTaken from the album ‘Whenever You Need Somebody’ – deluxe 2CD and digital deluxe out 6th May 2022 Pre-order here – https://RickAstley.lnk.to/WYNS2022ID\n\n“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s nat...",
          color: 16711680,
          author: {
            name: "Rick Astley",
            url: "https://www.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
          },
          provider: {
            name: "YouTube",
            url: "https://www.youtube.com",
          },
          thumbnail: {
            url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            proxy_url:
              "https://images-ext-1.discordapp.net/external/l-AFI3CsQVpcpSDYFtsDvDKag46BJ-uaQ9BTcU2JPC8/https/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
          video: {
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            width: 1280,
            height: 720,
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-19T11:09:20.322000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const ImageAttachment = Template.bind({});
ImageAttachment.args = {
  messages: [
    {
      id: "1069242905643982868",
      type: 0,
      content: "",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069242905430077470",
          filename: "Screenshot_from_2023-01-29_14-09-10.png",
          size: 22875,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069242905430077470/Screenshot_from_2023-01-29_14-09-10.png",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069242905430077470/Screenshot_from_2023-01-29_14-09-10.png",
          width: 640,
          height: 360,
          content_type: "image/png",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:09:34.278000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242903978573824",
      referenced_message: null,
    },
  ],
};

export const ZipAttachment = Template.bind({});
ZipAttachment.args = {
  messages: [
    {
      id: "1069242192301924403",
      type: 0,
      content: "",
      channel_id: "993105555042357268",
      author: testUser,
      attachments: [
        {
          id: "1069242191983153273",
          filename: "ZipFile.zip",
          size: 2666805,
          url: "",
          proxy_url: "",
          content_type: "application/zip",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:06:44.204000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242183749468160",
      referenced_message: null,
    },
  ],
};

export const AudioAttachment = Template.bind({});
AudioAttachment.args = {
  messages: [
    {
      id: "1069242654442930237",
      type: 0,
      content: "",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069242654166089728",
          filename: "bruh-sound-effect-2.mp3",
          size: 39008,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069242654166089728/bruh-sound-effect-2.mp3",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069242654166089728/bruh-sound-effect-2.mp3",
          content_type: "audio/mpeg",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:08:34.387000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242653268246528",
      referenced_message: null,
    },
  ],
};

export const Sticker = Template.bind({});
Sticker.args = {
  messages: [
    {
      id: "996737868657590322",
      type: 0,
      content: "schmoob",
      channel_id: "995987494615121991",
      author: testUser,
      attachments: [
        {
          id: "996737867860680724",
          filename: "VirtualBoxVM_edSVtI2r8v.png",
          size: 98228,
          url: "https://cdn.discordapp.com/attachments/995987494615121991/996737867860680724/VirtualBoxVM_edSVtI2r8v.png",
          proxy_url:
            "https://media.discordapp.net/attachments/995987494615121991/996737867860680724/VirtualBoxVM_edSVtI2r8v.png",
          width: 1152,
          height: 864,
          content_type: "image/png",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-07-13T11:20:26.382000+00:00",
      edited_timestamp: null,
      flags: 32,
      components: [],
      thread: {
        id: "996737868657590322",
        guild_id: "1",
        parent_id: "995987494615121991",
        owner_id: "132819036282159104",
        type: 11,
        name: "schmoob",
        last_message_id: "996737904120447066",
        thread_metadata: {
          archived: true,
          archive_timestamp: "2022-07-14T11:24:22.265000+00:00",
          auto_archive_duration: 1440,
          locked: false,
          create_timestamp: "2022-07-13T11:20:34.477000+00:00",
        },
        message_count: 1,
        member_count: 1,
        rate_limit_per_user: 0,
        flags: 0,
        total_message_sent: 1,
        member_ids_preview: ["132819036282159104"],
      },
      sticker_items: [
        {
          id: "903238292470898688",
          format_type: 1,
          name: "hmmmm",
        },
      ],
    },
  ],
};

export const VideoAttachment = Template.bind({});
VideoAttachment.args = {
  messages: [
    {
      id: "1069243404887806074",
      type: 0,
      content:
        "Look random `@widgetbot/message-renderer` user, I made a little Discord for the GameBoy!",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069243404585799680",
          filename: "bgb64_SkdwI3got6.mp4",
          size: 772258,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
          width: 960,
          height: 864,
          content_type: "video/mp4",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:11:33.307000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069243401242673152",
      referenced_message: null,
    },
  ],
};

export const Reply = Template.bind({});
Reply.args = {
  messages: [
    {
      id: "1069244022939472024",
      type: 19,
      content: "Wow that sure is a cool GameBoy ROM!",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:14:00.662000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069244022062579712",
      message_reference: {
        channel_id: "993210446096105522",
        guild_id: "1",
        message_id: "1069243404887806074",
      },
      referenced_message: {
        id: "1069243404887806074",
        type: 0,
        content: "",
        channel_id: "993210446096105522",
        author: testUser,
        attachments: [
          {
            id: "1069243404585799680",
            filename: "bgb64_SkdwI3got6.mp4",
            size: 772258,
            url: "https://cdn.discordapp.com/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
            proxy_url:
              "https://media.discordapp.net/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
            width: 960,
            height: 864,
            content_type: "video/mp4",
          },
        ],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "2023-01-29T13:11:33.307000+00:00",
        edited_timestamp: null,
        flags: 0,
        components: [],
      },
    },
  ],
};

export const UnknownReply = Template.bind({});
UnknownReply.args = {
  messages: [
    {
      id: "1069245334510915584",
      type: 19,
      content: "Wow, how insightful. This message changed my life.",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069245333344616448",
      referenced_message: null,
    },
  ],
};

export const CodeBlockReply = Template.bind({});
CodeBlockReply.args = {
  messages: [
    {
      id: "1069261084990648400",
      type: 19,
      content: "hemlo",
      channel_id: "993105555042357268",
      author: {
        id: "132819036282159104",
        username: "JohnyTheCarrot",
        display_name: null,
        avatar: "3a30ffeeeb354950804d77ded94162d3",
        avatar_decoration: null,
        discriminator: "0001",
        public_flags: 4457220,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T14:21:48.572000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069261084294119424",
      message_reference: {
        channel_id: "993105555042357268",
        guild_id: "1",
        message_id: "1069241535809454201",
      },
      referenced_message: {
        id: "1069241535809454201",
        type: 0,
        content:
          '```tsx\nexport const CodeBlock = styled.withConfig({ displayName: \n  "code")(\n  "md-code-block",\n  css({\n    display: "block",\n    overflowX: "auto",\n    borderRadius: 4,\n    fontSize: theme.fontSizes.m,\n    lineHeight: "1.125rem",\n    textIndent: 0,\n    whiteSpace: "pre-wrap",\n    backgroundColor: theme.colors.backgroundSecondary,\n    border: `1px solid ${theme.colors.backgroundTertiary}`,\n    marginTop: theme.space.medium,\n    padding: ".5em",\n    fontFamily: fonts,\n  })\n });\n```',
        channel_id: "993105555042357268",
        author: {
          id: "132819036282159104",
          username: "JohnyTheCarrot",
          display_name: null,
          avatar: "3a30ffeeeb354950804d77ded94162d3",
          avatar_decoration: null,
          discriminator: "0001",
          public_flags: 4457220,
        },
        attachments: [],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "2023-01-29T13:04:07.684000+00:00",
        edited_timestamp: null,
        flags: 0,
        components: [],
      },
    },
  ],
};
