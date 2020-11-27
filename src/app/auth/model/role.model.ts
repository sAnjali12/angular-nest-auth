export interface Role {
    id: string;
    isDeleted: boolean;
    name: string;
    displayName: string;
    description: string;
}
  
export interface Allrole {
    id?: string;
    isDeleted: boolean;
    name: string;
    displayName: string;
    description?: string;
}
  