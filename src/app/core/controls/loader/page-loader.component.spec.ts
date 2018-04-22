import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageLoaderService } from './page-loader.service';
import { PageLoaderComponent } from './page-loader.component';

describe('PageLoaderComponent', () => {
    describe('Component Tests', () => {
        let component: PageLoaderComponent;
        let fixture: ComponentFixture<PageLoaderComponent>;
        let pageLoaderService: PageLoaderService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MatProgressSpinnerModule],
                declarations: [ PageLoaderComponent ],
                providers: [ PageLoaderService ]
            })
            .compileComponents();
          }));

          beforeEach(() => {
            fixture = TestBed.createComponent(PageLoaderComponent);
            component = fixture.componentInstance;
            pageLoaderService = TestBed.get(PageLoaderService);
          });

          it('should create', () => {
            expect(component).toBeTruthy();
          });

          it('should show loader when loader service publishes an open state', async(() => {
            fixture.detectChanges();
            pageLoaderService.start();
            fixture.detectChanges();

            const loaderOverlayDe = fixture.debugElement.query(By.css('#loader-overlay'));

            expect(loaderOverlayDe).toBeTruthy();
          }));

          it('should not show loader when loader service publishes a closed state', async(() => {
            fixture.detectChanges();
            pageLoaderService.stop();
            fixture.detectChanges();

            const loaderOverlayDe = fixture.debugElement.query(By.css('#loader-overlay'));

            expect(loaderOverlayDe).toBeFalsy();
          }));

          it('should show and hide the loader when loader service publishes both an open a closed state', async(() => {
            fixture.detectChanges();
            pageLoaderService.start();
            fixture.detectChanges();

            const loaderOverlayAfterOpenDe = fixture.debugElement.query(By.css('#loader-overlay'));

            expect(loaderOverlayAfterOpenDe).toBeTruthy();

            pageLoaderService.stop();
            fixture.detectChanges();

            const loaderOverlayAfterCloseDe = fixture.debugElement.query(By.css('#loader-overlay'));

            expect(loaderOverlayAfterCloseDe).toBeFalsy();
          }));
    });

    describe('Unit Tests', () => {
        it('Sets canShow to false when instantiated', () => {
            const component = new PageLoaderComponent(null);
            expect(component.canShow).toBeFalsy();
        });

        it('Sets canShow to true when service start method is called', () => {
            // Easy service so no need to mock it
            const service = new PageLoaderService();
            const component = new PageLoaderComponent(service);

            component.ngOnInit();

            service.start();

            expect(component.canShow).toBeTruthy();
        });

        it('Sets canShow to false when service stop method is called', () => {
            // Easy service so no need to mock it
            const service = new PageLoaderService();
            const component = new PageLoaderComponent(service);

            component.ngOnInit();

            service.stop();

            expect(component.canShow).toBeFalsy();
        });

        it('Sets canShow to true, then false when service start and stop methods are called respectively', () => {
            // Easy service so no need to mock it
            const service = new PageLoaderService();
            const component = new PageLoaderComponent(service);

            component.ngOnInit();

            service.start();

            expect(component.canShow).toBeTruthy();

            service.stop();

            expect(component.canShow).toBeFalsy();
        });
    });
});
