import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ItemService } from './item-service.service';

describe('ItemServiceService', () => {


    beforeEach(() => {

        var httpStub = {

        };

        TestBed.configureTestingModule({
            providers: [
                ItemService,
                { provide: Http, useValue: httpStub }
            ]
        });
    });

    it('should be created', inject([ItemService], (service: ItemService) => {
        expect(service).toBeTruthy();
    }));

    it('should GET a single item', inject([ItemService], (service: ItemService) => {
        expect(service).toBeTruthy();

        var testKey = "12345";

        var httpService = TestBed.get(Http);

        httpService.get = (api: String) => {

            expect(api).toContain('api/items/' + testKey);

            var result = {
                json: () => {
                    return {
                        "id": testKey,
                        "name": "Widgeywidgywidgy",
                        "description": "A generic widget that does  cool stuff",
                        "currentInventory": 107
                    };
                }
            };
            return Observable.from([result]);
        }

        service.getItem(testKey)
            .subscribe(resultItem => {
                expect(resultItem).toBeTruthy();
                expect(resultItem.id).toEqual(testKey);
                expect(resultItem.currentInventory).toEqual(107);
                expect(resultItem.name).toEqual("Widgeywidgywidgy");
                expect(resultItem.description).toEqual("A generic widget that does  cool stuff");
            });
    }));
});
