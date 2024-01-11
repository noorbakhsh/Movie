import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { MoviesService } from './services/movies.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    MoviesService
      ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
