export const headerRoutes = [
  {
    name: "Posts", icon: "fas fa-list-alt", routerLink: "posts", acl: 'posts'
  },
  {
    name:"Add Post", icon: "fas fa-list-alt", routerLink: "add-post", acl: 'Add-post'
  },
  {
    name:"Inbox", icon: "fas fa-list-alt", routerLink: "chat", acl: 'chat'
  },
  {
    name:"orders", icon: "fas fa-list-alt", routerLink: "orders", acl: 'orders'
  }
]

export const sideRoutes = [
  {
    name: "Home", icon: "fas fa-list-alt", routerLink: "posts", acl: 'Home'
  },
  {
    name: "Groups", icon: "fas fa-fill-drip", routerLink: "groups", acl: 'color', id: "ui", sub: [
      { name: "Group1"},
      { name: "Group2"},
      { name: "Group3"},
    ]
  },
  {
    name: "Categories", icon: "fas fa-fill-drip", routerLink: "categories", acl: 'color', id: "ui", sub: [
      { name: "Appliances"},
      { name: "Group2"},
      { name: "Group3"},
    ]
  },
  ]