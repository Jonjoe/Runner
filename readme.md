
[Indee](http://indee.io)
Built by [Jonjoe Whitfield](http://jonjoe.io)

# Indee's Standard Workflow

## Contents
- What Is It?
- System Requirments
- How Do I Use It?
- Software Stack
- Features
- Provided Libraries
- Todo

## What Is It?
Standardised task runner for all front end work done by indee.

## System Requirments

All you need is a [modern browser](http://www.google.com/intl/en_uk/chrome/browser/) a terminal window and [NodeJS](http://nodejs.org/) installed..

## How Do I Use It?

All you need to do is run the init.sh. This will remove the git repo and initialise a new one, install node components, download dependencies and compile app/ into dist/.

```
sh init.sh
```

After this to start the watcher run 

```
gulp
```

## Software Stack
- Jade(Pretty)
- SASS(SCSS)
- JavaScript

## Features
- Style compression
- Script compression
- Script concatinations
- SASS Error Catching (Gulp wont crash on error)
- All tasks running in harmony from default command
- Live compiling from default command
- Style auto prefixing

## Provided Libraries:
- [jQuery](http://jquery.com/)
- [Mondernizr](http://modernizr.com/)
- [Bootstrap](http://getbootstrap.com/)
- [OwlCarousel 2](http://www.owlcarousel.owlgraphic.com/)
- [HolderJS](http://imsky.github.io/holder/)
- [Font Awesome ... Ofcourse!](http://fortawesome.github.io/Font-Awesome/)
- [Animate CSS](http://daneden.github.io/animate.css/)

## Todo
- Integrate and fully Automate Bower Package Manager
- Lint JS
- Native Notifications for success and error warnings
- Integrate Sourcemapping

## Support

IMPORTANT! Empty sass files will give the following error
```
gulp(8300,0x7fff7b795300) malloc: *** error for object 0x103b9a5a9: pointer being freed was not allocated
*** set a breakpoint in malloc_error_break to debug
```
If you need to have an empty sass file please add
```
\\
```
inside the file. This will prevent the error. This error is a bug thats on the C layor of the gulp-sass plugin. Devs are aware of it but it has not been fixed yet.
