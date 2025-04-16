import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from "rxjs";

export interface Student {
    name: string;
    surname: string;
    group: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
    private apiUrl = 'assets/data.json';
    constructor(private http: HttpClient) { }

    getStudents(): Observable<Array<Student>> {
        return this.http.get<Array<Student>>(this.apiUrl)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return of([]);
                })
            )
    }

}