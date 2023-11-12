export interface PlayerData {
    master?: PlayerEntry[];
    seducer?: PlayerEntry[];
    catch?: PlayerEntry[];
}
  
export interface PlayerEntry {
    id: number;
    textPlace: string;
    textDificulty?: string; // This property is made optional
}
