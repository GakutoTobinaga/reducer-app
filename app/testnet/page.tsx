type User = {
    id: number;
    name: string;
  };
  
type uPermissions = {
    canRead: boolean;
    canWrite: boolean;
    canExecute: boolean;
};

type UseruPermissons = User & uPermissions

const sample : UseruPermissons = {
    id: 1,
    name: "OK",
    canRead: false,
    canWrite: true,
    canExecute: false,
}