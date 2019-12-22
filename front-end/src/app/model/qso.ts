export class QSO {
    constructor(public date: Date,
                public time: Date,
                public callsign: string,
                public frequency: string,
                public mode: string,
                public rstSent: number,
                public rstReceived?: number,
                public id?: number,
                public power?: number,
                public name?: string,
                public qth?: string,
                public notes?: string) {
    }
}
