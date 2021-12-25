import {Browser, BrowserContext, Page} from 'puppeteer';
import {avoidDetection, launch} from 'puppeteer-pro';
import {PUPPETEER_OPTIONS} from './puppeteer.constants';
import {PuppeteerScriptType} from './puppeteer.type';

avoidDetection();

export class PuppeteerUC {
  public page?: Page;
  public browser?: Browser;
  public context?: BrowserContext;

  public async execute(script: PuppeteerScriptType) {
    await this.initialize();

    await script();
  }

  public async fetch(url: string) {
    const content = await this.page?.evaluate(async (url: string) => {
      const response = await fetch(url);

      const data = await response.json();

      return data.content;
    }, url);

    return content;
  }

  private async initialize() {
    const browser = await launch(PUPPETEER_OPTIONS);

    const context = browser.defaultBrowserContext();

    const page = (await browser.pages())[0];

    this.page = page;

    this.browser = browser;

    this.context = context;
  }
}

export const puppeteerUC = new PuppeteerUC();
