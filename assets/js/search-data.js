// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-10-05-SgAISafetyChallenges/";
          
        },
      },{id: "post-is-transformers-agi-occum-razor",
        
          title: "Is Transformers AGI Occum Razor",
        
        description: "I Am Not Convinced Yet",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/transformersOccumRazor/";
          
        },
      },{id: "post-a-case-for-ai-controls",
        
          title: "A Case for AI Controls",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AIControl/";
          
        },
      },{id: "post-ai-safety-and-regulations-are-two-sides-of-the-same-coin",
        
          title: "AI Safety And Regulations Are Two Sides of the Same Coin",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AISafetyRegulations/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/test/";
          
        },
      },{id: "news-first-runner-up-in-israeli-national-hackathon",
          title: 'First Runner-Up in Israeli National Hackathon',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-06-30-hackru/";
            },},{id: "news-invitation-to-judging-panel-of-cybersecurity-and-ai-hackathon",
          title: 'Invitation to Judging Panel of Cybersecurity and AI Hackathon',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-11-aisp/";
            },},{id: "news-primary-teaching-assistant-for-post-graduate-module",
          title: 'Primary Teaching Assistant for Post-graduate Module',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-16-storytellingta/";
            },},{id: "news-mentorship-national-innovation-challenge-top-8-finalist-and-awarded-5-000",
          title: 'Mentorship - National Innovation Challenge Top 8 Finalist and Awarded $5,000',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-30-innochallenge/";
            },},{id: "news-mentorship-national-robotics-competition-national-top-3-placing",
          title: 'Mentorship - National Robotics Competition National Top 3 Placing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-09-nrc/";
            },},{id: "projects-can-you-hear-me",
          title: 'Can You Hear Me?',
          description: "Automatic Speech Recognition Pipeline for Distress Intelligence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01-2025-asrDistress/";
            },},{id: "projects-gogoguru",
          title: 'GogoGuru',
          description: "Enhancing Motorists Communication through Personalised Co-Pilot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04-2024-traffic-innochallenge/";
            },},{id: "projects-project-recogneyes",
          title: 'Project RecognEyes',
          description: "Have You Seen This Man? Now, AI Has.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04-2025-recogneyes/";
            },},{id: "projects-too-small-to-handle",
          title: 'Too Small to Handle?',
          description: "A Holistic Entity Resolution Evaluation Framework.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11-2024-LLMeval/";
            },},{id: "projects-theory-of-minds-project",
          title: 'Theory of Minds Project',
          description: "Composable Team Hierarchy Re-implementation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11-2025-TOMs-CTH/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%72%65%64.%63%68%65%61%6E%67@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jach23", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jared-cheang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
