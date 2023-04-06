export interface Movie {
  label: string;
  year: number;
}

export interface Station {
  id: number;
  label: string;
}

export interface Searchstations {
  startStation: Station | null;
  endStation: Station | null;
}

export interface Bus {
  id: number;
  name: string;
  stations: Station[];
}

// const busLine40: Bus = {
//   id: 23,
//   name: "YBS40",
//   stations: [{ id: 55, label: "Hledan" }],
// };
