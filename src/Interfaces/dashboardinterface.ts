export interface dashboard_admin_list_one_I {
  _id: string
  name: string,
  email: string,
  mobilenumber: string

}
export interface dashboard_admin_list {
  admin_list: dashboard_admin_list_one_I[]
}
export interface dashboard_admin_total {

  totalAmount: number
  billCount: number

}
export interface dashboar_atendence_list_item {
  Date: string,
  closedAt: string,
  opensAt: string,
  _id: string,

}
export interface dashboar_atendence {
  atendence:dashboar_atendence_list_item[]
  adminId:string
}
export interface dashboard_admin {
  admin_list: dashboard_admin_list_one_I[]
  total: dashboard_admin_total
  atendence_list:dashboar_atendence
}
