export const user = '/user/';
export const common = '/common/v1/';

export const ApiUrl = {

  login: `/login`,
  userListing: `${user}/userListing`,
  config: `config`,
  imageUpload: `${common}upload/file`,

  dashboard: {
    count: `dashboardCount`,
    chartData: `user/booking/graph`
  },

  service_category: {
    create_edit: `service/category`,
    get: `${common}service/category`,
    status: `service/category/status`
  },

  promotion_discount: {
    create_edit: `promotion`,
    get: `promotion/list`,
    status: `promotion/status`
  },

  users: {
    get: `users`,
    status: `users/status`,
    getList: `users/dropdown`
  },

  stylists: {
    get: `stylists`,
    status: `stylists/status`,
    getList: `stylists/dropdown`,
    search: `stylist/service`
  },

  bookings: {
    get: `${common}booking`,
    chartData: `booking/graph/status/count`
  },

  post: {
    get: `${common}post`,
    status: `post/status`
  }
};