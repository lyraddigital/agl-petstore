import { PageLoaderService } from './page-loader.service';
import { LoaderState } from './loader-state';

describe('PageLoaderService', () => {
    let service: PageLoaderService;

    beforeEach(() => { service = new PageLoaderService(); });

    it('loaderStateChange should return an observable', () => {
        expect(service.loaderStateChange()).toBeTruthy();
    });

    it('start should return an Opened state to the subscriber',
      (done: DoneFn) => {
        service.loaderStateChange().subscribe(state => {
            expect(state).toBe(LoaderState.Opened);
            done();
        });

        service.start();
    });

    it('stop should return a Closed state to the subscriber',
      (done: DoneFn) => {
        service.loaderStateChange().subscribe(state => {
            expect(state).toBe(LoaderState.Closed);
            done();
        });

        service.stop();
    });
});
