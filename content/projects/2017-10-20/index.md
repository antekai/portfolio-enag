---
client: "Gastronomie von Anfang an"
title: "Gastronomie von Anfang an"
cover: "./gavan-mock.png"
date: "2017-10-20"
service: "Website, PWA"
---
## Description
GvA's landing page is a Static Progressive Web App(PWA) and was originally designed and developed at September 2016.  
 
![Gastronomie von Anfang an website mockup](./gavan-mock.png)

**URL:** https://gastronomievonanfangan.de/  
**Documentation and Styleguide:** https://gastronomievonanfangan.de/pattern-library/  
**Compatibility:** All modern browsers (IE10+). Offline functionality (PWA) compatibility with firefox(44+), chrome(45+) browsers.  

## Service
- Content strategy, web design, development. 
- Deployment and webserver (apache) configuration.
- Testing, optimization, maintenance and documentation. 
- Facebook, LinkedIn, Xing business pages setup. 
- Google business and google search console registration. Google analytics integration. 



## Stack
CSS: Bootstrap, Animate.css, sass  
JS: Bootstrap, jQuery, jqBootstrapValidation, modernizr, Google Maps API  
Build tools: npm scripts  
Development Dependecies: node-sass, purify-css, autoprefixer, critical, eslint, uglifyJs, imagemin (imagemin-webp), svgo, browsersync, onchange  
Version control: Git, Bitbucket  

## Testing & optimization
- General - JS (eslint), Html (W3c Validator),
- Accesibility (wave)
- Perfomance - Pagespeed Insights (score 98), Webpagetest (grade A)
- PWA - Lighthouse (PWA score 90+)
- Security - SecurityHeaders.io (grade A)
- SEO - Rankgen (SEO score A)
- CacheTest - Gift Of Speed
- Browser Testing - Browsershots
- Favicon - Favicon checker

####SEARCH ENGINE OPTIMIZATION (SEO)

- Structured Data (jsonld)
- Robots.txt setup
- Sitemap.xml setup
- Google Search Console website registration
- Open graph, twitter card meta
- Created/linked social media pages (linkedin,xing,facebook) but no social media or any kind of marketing

####PERFORMANCE OPTIMIZATION

- Gzip compression (apache config)
- CSS-JS Minification, CSS purification (on build)
- Webp images with fallback to progressive jpgs (on build)
- Http/2 protocol
- Inline Critical CSS (on build)
- Caching assets (apache config)
- Service worker registration for offline functionality

####SECURITY OPTIMIZATION

- Serving Static content
- SSL certificate
- HTTP Strict Transport Security - serve only over https (apache config)
- Protect against XSS attacks (apache config)
- Protect against page-framing and click-jacking (apache config)
- Protect against content-sniffing (apache config)
- Content Security Policy (apache config)
- Referrer-Policy (apache config)

####ANALYTICS

- Google analytics setup (paired with google search console)