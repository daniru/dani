import { Subscription } from 'rxjs/Subscription';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestBed, inject, fakeAsync, } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { SnippetService } from './snippet.service';

const _createResponse = (body) => {
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    return new Response(options);
}

describe('BlogService', () => {

  const httpSub = {
      get: () => {}
  }

  it('should be able to be created and load cache with no data', () => {
    const body = { blog: [{ key: 'a' }] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const serv = new SnippetService(<any>httpSub);
  });

  it('should return list of blogs', () => {
    const body = { blog: [{}, {}] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    service.getSnippets().subscribe((blogs) => {
      expect(blogs.length).toBe(2);
    });
  });

  it('should not find any blog with no data', () => {
    const body = { blog: [] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    service.getBlog('b').subscribe((blog) => {
      expect(blog).toBeNull();
    });
  });

  it('should not find any blog', () => {
    const body = { blog: [{ key: 'a' }] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    service.getBlog('b').subscribe((blog) => {
      expect(blog).toBeNull();
    });
  });

  it('should find a blog', () => {
    const body = { blog: [{ key: 'a' }] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    service.getBlog('a').subscribe((blog) => {
      expect(blog).toBeDefined();
      expect(blog.key).toBe('a');
    });
  });

  it('should have first page by default', () => {
    const body = { blog: [{}, {}, {}, {}, {}] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    expect(service.page).toBe(1);
  });

  it('should change pages', () => {
    const body = { blog: [{}, {}, {}, {}, {}] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    expect(service.page).toBe(1);
    service.setPage(2);
    expect(service.page).toBe(2);
  });

  it('should return array with number of pages', () => {
    const body = { blog: [{}, {}, {}, {}, {}] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    expect(service.pages.length).toBe(3);
    service.setPage(2);
    expect(service.page).toBe(2);
  });

  it('should emit value when refresh is called', () => {
    const body = { blog: [{}, {}, {}] };
    const options = new ResponseOptions({ body: JSON.stringify(body)});
    const response = new Response(options);
    const spy = spyOn(httpSub, 'get').and.returnValue(Observable.of(response));
    const service = new SnippetService(<any>httpSub);
    const sub = service.getSnippets().subscribe((x) => {
      expect(x.length).toBe(2);
    });
    sub.unsubscribe();
    service.setPage(2);
    const sub2 = service.getSnippets().subscribe((x) => {
      expect(x.length).toBe(1);
    });
    service.refresh();
    sub2.unsubscribe();
  });

});
