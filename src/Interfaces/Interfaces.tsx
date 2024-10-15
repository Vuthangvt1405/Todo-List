export interface ChildComponents {
  children: React.ReactNode;
}

export interface objectTask {
  id: number;
  name: string;
  checked: boolean;
}

export interface defaultContext {
  initialList: objectTask[];
  setInitialList: React.Dispatch<React.SetStateAction<objectTask[]>>;
}
