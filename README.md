# Tutorial SitePackage - Site_Agency
An example how to setup your own custom sitepackage. I will upgrade
this sitepackage and add new features step by step.

## Folder structure
- Configuration
    - RTE
        - SiteAgency.yaml || custom config for you RTE
    - Sets || contains all your sets
        - SiteAgency || name of your set
            - PageTsConfig || page configs - template settings
                - BackendLayouts || backend layouts
                    - homepage.tsconfig || config for your homepage 
                    - subpage.tsconfig || config for your subplages
                    - add more if needed
            - TypoScript 
                - config.typoscript || configuration
            - config.yaml || make your sitepackage available - define dependencies
            - page.tsconfig || page settings
            - page.typoscript || configure your PAGE, dataProcessors, CSS, JS
            - settings.definitions.yaml || settings available in the "Sites"
            - settings.yaml || settings
            - setup.typoscript || import page.typoscript or other .typoscripts
    - TCA 
        - Overrides
    - TypoScript
- Resources
    - Private
        - Language
            - locallang_be.xlf
        - PageView
            - Layouts
                - Default.html
            - Pages
                - HomepageLayout.html
                - SubpageLayout.html
            - Partials
                - Breadcrumbs.html
                - Content.html
                - Footer.html
                - Navigation.html
        - Sass
            - main.scss
    - Public
        - Css
        - Fonts
        - Icons
        - Images (dummy logo)
        - JavaScript
- composer.json
- ext_localconf.php
- README.md

## Installation & Setup
```
composer req tutorial/site-agency (in your root folder)

This sitepackage goes into your /packages/ folder

1. Go to Sites -> setup
2. Click on "Edit site configuration"
3. Scroll down to "Sets for this Site"
4. Choose "Tutorial SitePackage" in Available Items
5. Save

## Edit site settings
You can edit and add more site settings

SiteAgency
- Basic Settings > Template Paths | Logos
- Company informations > company data
- Company socials > social media
- Page parts > different template parts
- Links > legal links

## TODOs
I will add new features step by step. Request additinal infos, if you want.

- [x] basic site package
- [x] subpage template 
- [x] breadcrumbs navigation with conditions
- [ ] alternative navigation layout
- [x] social media feed menu on settings.definitions
- [ ] :tada: