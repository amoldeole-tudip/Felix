export const ADMIN_MENU = [
  {
   path: '',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: '',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'campaign',
        data: {
          menu: {
            title: 'Campaigns',
            icon: '',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'viewCampaign',
            data: {
              menu: {
                title: 'View Campaigns',
                icon: '',
                selected: false,
                expanded: false,
                order: 0
              }
            }
          },
          {
            path: 'createCampaign',
            data: {
              menu: {
                title: 'Create Campaign',
                icon: '',
                selected: false,
                expanded: false,
                order: 0
              }
            }
          },
          {
            path: 'drafts',
            data: {
              menu: {
                title: 'Drafts',
                icon: '',
                selected: false,
                expanded: false,
                order: 0
              }
            }
          },
        ]
      },
      {
        path: 'audience',
        data: {
          menu: {
            title: 'Audience',
            icon: '',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'settings',
        data: {
          menu: {
            title: 'Settings',
            icon: '',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
    ]
}
];
