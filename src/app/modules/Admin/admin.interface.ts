export type IAdminFilterRequest = {
  name?: string | undefined;
  email?: string | undefined;
  contactNumber?: string | undefined;
  searchTerm?: string | undefined;
};
export type IPaginationOptions = {
  limit?: number;
  page?: number;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};
