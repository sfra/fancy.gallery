







<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-mjQPRAh2Y9A0sPdZzipNfPO7PT4g06mk0uZs15DbL/vsNCRGx1uRzWVzls9MJCoy2yRNjaMmEVFKJDpCui00mA==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-df973073d880f28fbbae0263fb1ef62b.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-k4rXi2xAgpvXlB7r/tZ1ski3o3AWXfn7Z6hx6C/g9CcFeM5miuGB8zJFRgQW5wDKRaNQfv42R9F707X/2WqAQg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-2b520d809bcf76c745c815d9523f0a00.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-oq9Re9Urx17JAhj6uI9tKyz1nDNmkHrfNbiaVwDNPT5gi4+7A+z+/t/VLNWg7KBXCSRi4yZiQM6Rpu4rp1PwhQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-0be82e42e6ce84ef34fecbf8469a45aa.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>EventEmitter/guide.md at master · Olical/EventEmitter · GitHub</title>
    <meta name="description" content="Evented JavaScript for the browser. Contribute to Olical/EventEmitter development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/315229?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="Olical/EventEmitter" /><meta property="og:url" content="https://github.com/Olical/EventEmitter" /><meta property="og:description" content="Evented JavaScript for the browser. Contribute to Olical/EventEmitter development by creating an account on GitHub." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="8AAC:0C2F:231ACA5:3EB1542:5BB24E58" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="8AAC:0C2F:231ACA5:3EB1542:5BB24E58" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MTM4MDNjOWQ1Y2YzOWIzNzJmYzQ4NGNmNzg0YjY4OTBkZTU5NDI3YWNmNGJiMzI2NTc1ZTI1ZTcwZjZmMGQ4MXx7InJlbW90ZV9hZGRyZXNzIjoiNS4xNzMuMjAwLjExNCIsInJlcXVlc3RfaWQiOiI4QUFDOjBDMkY6MjMxQUNBNTozRUIxNTQyOjVCQjI0RTU4IiwidGltZXN0YW1wIjoxNTM4NDEyMTIwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR">

  <meta name="html-safe-nonce" content="b1a27af4ee9baa71b5961c6870510a1b109c83b8">

  <meta http-equiv="x-pjax-version" content="2c04ba680b93d94eb1e815c3fce9dbaa">
  

      <link href="https://github.com/Olical/EventEmitter/commits/master.atom" rel="alternate" title="Recent Commits to EventEmitter:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/Olical/EventEmitter git https://github.com/Olical/EventEmitter.git">

  <meta name="octolytics-dimension-user_id" content="315229" /><meta name="octolytics-dimension-user_login" content="Olical" /><meta name="octolytics-dimension-repository_id" content="1609213" /><meta name="octolytics-dimension-repository_nwo" content="Olical/EventEmitter" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="1609213" /><meta name="octolytics-dimension-repository_network_root_nwo" content="Olical/EventEmitter" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/Olical/EventEmitter/blob/master/docs/guide.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="1609213" data-scoped-search-url="/Olical/EventEmitter/search" data-unscoped-search-url="/search" action="/Olical/EventEmitter/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=+v77ve/L84qZItpj+IKWjYGeuQCO+LpMPQYRdc/IwSxArgKehAssaDzqs8CW0E33ajrDMCzQkA9swlfOF9PqnQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item" role="option">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none">
                      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
                    </div>

                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" role="listbox" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2FOlical%2FEventEmitter%2Fblob%2Fmaster%2Fdocs%2Fguide.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      








  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FOlical%2FEventEmitter"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/Olical/EventEmitter/watchers"
     aria-label="60 users are watching this repository">
    60
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FOlical%2FEventEmitter"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/Olical/EventEmitter/stargazers"
      aria-label="2535 users starred this repository">
      2,535
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FOlical%2FEventEmitter"
        class="btn btn-sm btn-with-count tooltipped tooltipped-s"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/Olical/EventEmitter/network/members" class="social-count"
       aria-label="323 users forked this repository">
      323
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/Olical">Olical</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/Olical/EventEmitter">EventEmitter</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /Olical/EventEmitter" href="/Olical/EventEmitter">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /Olical/EventEmitter/issues" href="/Olical/EventEmitter/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /Olical/EventEmitter/pulls" href="/Olical/EventEmitter/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Olical/EventEmitter/projects" href="/Olical/EventEmitter/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Olical/EventEmitter/wiki" href="/Olical/EventEmitter/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts /Olical/EventEmitter/pulse" href="/Olical/EventEmitter/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/Olical/EventEmitter/blob/1e2c824c0ddce1e73a6b2a8c0ebc912a08a811d6/docs/guide.md">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:646e0500343e4af4fdb57ef6a9e41b71 -->

      <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="pobCTVUteRMGeX8jgvMj5dwenMrPLPkfevKrCwdunuB0JgB1zxYU4bdTxiWDTjL4p54QuQWxv59438ohizdIbg==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Olical/EventEmitter/blob/master/docs/guide.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.5/docs/guide.md"
              data-name="v5.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.5">
                v5.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.4/docs/guide.md"
              data-name="v5.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.4">
                v5.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.3/docs/guide.md"
              data-name="v5.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.3">
                v5.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.2/docs/guide.md"
              data-name="v5.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.2">
                v5.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.1/docs/guide.md"
              data-name="v5.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.1">
                v5.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.2.0/docs/guide.md"
              data-name="v5.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.2.0">
                v5.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.1.0/docs/guide.md"
              data-name="v5.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.1.0">
                v5.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v5.0.0/docs/guide.md"
              data-name="v5.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.0">
                v5.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.3.0/docs/guide.md"
              data-name="v4.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.0">
                v4.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.11/docs/guide.md"
              data-name="v4.2.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.11">
                v4.2.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.10/docs/guide.md"
              data-name="v4.2.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.10">
                v4.2.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.9/docs/guide.md"
              data-name="v4.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.9">
                v4.2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.8/docs/guide.md"
              data-name="v4.2.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.8">
                v4.2.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.7/docs/guide.md"
              data-name="v4.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.7">
                v4.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.6/docs/guide.md"
              data-name="v4.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.6">
                v4.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.5/docs/guide.md"
              data-name="v4.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.5">
                v4.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.4/docs/guide.md"
              data-name="v4.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.4">
                v4.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.3/docs/guide.md"
              data-name="v4.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.3">
                v4.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.2/docs/guide.md"
              data-name="v4.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.2">
                v4.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.1/docs/guide.md"
              data-name="v4.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.1">
                v4.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.2.0/docs/guide.md"
              data-name="v4.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.0">
                v4.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.1.1/docs/guide.md"
              data-name="v4.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.1">
                v4.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.1.0/docs/guide.md"
              data-name="v4.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.0">
                v4.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.0.5/docs/guide.md"
              data-name="v4.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.5">
                v4.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.0.3/docs/guide.md"
              data-name="v4.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.3">
                v4.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.0.2/docs/guide.md"
              data-name="v4.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.2">
                v4.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.0.1/docs/guide.md"
              data-name="v4.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.1">
                v4.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v4.0.0/docs/guide.md"
              data-name="v4.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.0">
                v4.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.7/docs/guide.md"
              data-name="v3.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.7">
                v3.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.6/docs/guide.md"
              data-name="v3.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.6">
                v3.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.5/docs/guide.md"
              data-name="v3.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.5">
                v3.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.4/docs/guide.md"
              data-name="v3.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.4">
                v3.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.3/docs/guide.md"
              data-name="v3.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.3">
                v3.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.2/docs/guide.md"
              data-name="v3.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.2">
                v3.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.1/docs/guide.md"
              data-name="v3.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.1">
                v3.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.1.0/docs/guide.md"
              data-name="v3.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.0">
                v3.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v3.0.0/docs/guide.md"
              data-name="v3.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.0">
                v3.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v2.0.0/docs/guide.md"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v1.1.3/docs/guide.md"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v1.1.2/docs/guide.md"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v1.1.1/docs/guide.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v1.1.0/docs/guide.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Olical/EventEmitter/tree/v1.0.0/docs/guide.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/Olical/EventEmitter/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/Olical/EventEmitter"><span>EventEmitter</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/Olical/EventEmitter/tree/master/docs"><span>docs</span></a></span><span class="separator">/</span><strong class="final-path">guide.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/Olical/EventEmitter/commit/975ddee90fed1c88155aa8f68b58b0e982daad65" data-pjax>
          975ddee
        </a>
        <relative-time datetime="2016-05-18T16:37:02Z">May 18, 2016</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-user-id="643434" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tkrotoff"><img class="avatar" src="https://avatars0.githubusercontent.com/u/643434?s=40&amp;v=4" width="20" height="20" alt="@tkrotoff" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-user-id="643434" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tkrotoff">tkrotoff</a>
          <a data-pjax="true" title="type=&#39;text/javascript&#39; is not needed in HTML5" class="message" href="/Olical/EventEmitter/commit/975ddee90fed1c88155aa8f68b58b0e982daad65">type='text/javascript' is not needed in HTML5</a>
      </div>

    <div class="commit-tease-contributors">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary class="btn-link" aria-haspopup="dialog"  >
    
    <span><strong>4</strong> contributors</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/Olical">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/315229?s=40&amp;v=4" width="20" height="20" />
                Olical
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/tkrotoff">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/643434?s=40&amp;v=4" width="20" height="20" />
                tkrotoff
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/peyerluk">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/47606?s=40&amp;v=4" width="20" height="20" />
                peyerluk
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/cgardens">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/9092207?s=40&amp;v=4" width="20" height="20" />
                cgardens
</a>            </li>
        </ul>

  </details-dialog>
</details>
          <a class="avatar-link" data-hovercard-user-id="315229" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Olical/EventEmitter/commits/master/docs/guide.md?author=Olical">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/315229?s=40&amp;v=4" width="20" height="20" alt="@Olical" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="643434" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Olical/EventEmitter/commits/master/docs/guide.md?author=tkrotoff">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/643434?s=40&amp;v=4" width="20" height="20" alt="@tkrotoff" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="47606" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Olical/EventEmitter/commits/master/docs/guide.md?author=peyerluk">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/47606?s=40&amp;v=4" width="20" height="20" alt="@peyerluk" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="9092207" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Olical/EventEmitter/commits/master/docs/guide.md?author=cgardens">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/9092207?s=40&amp;v=4" width="20" height="20" alt="@cgardens" /> 
</a>

    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/Olical/EventEmitter/raw/master/docs/guide.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/Olical/EventEmitter/blame/master/docs/guide.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/Olical/EventEmitter/commits/master/docs/guide.md">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      302 lines (207 sloc)
      <span class="file-info-divider"></span>
    9.05 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-guide" class="anchor" aria-hidden="true" href="#guide"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guide</h1>
<p>This guide should get you going with EventEmitter. Once finished you may wish to learn more about the script and use methods that are not shown here. At that point you should either browse <a href="https://github.com/Olical/EventEmitter/blob/master/docs/api.md">the API documentation</a> or have a look around <a href="https://github.com/Olical/EventEmitter/blob/master/EventEmitter.js">the source</a>.</p>
<h2><a id="user-content-getting-a-copy-of-the-script" class="anchor" aria-hidden="true" href="#getting-a-copy-of-the-script"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting a copy of the script</h2>
<h3><a id="user-content-cloning-the-full-source-as-a-submodule" class="anchor" aria-hidden="true" href="#cloning-the-full-source-as-a-submodule"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cloning the full source as a submodule</h3>
<div class="highlight highlight-source-shell"><pre>git submodule add git://github.com/Olical/EventEmitter.git assets/js/EventEmitter</pre></div>
<p>This will copy the whole repository, including all documentation and build scripts. Obviously you must replace the destination directory with your desired location.</p>
<h3><a id="user-content-downloading-a-minified-version" class="anchor" aria-hidden="true" href="#downloading-a-minified-version"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Downloading a minified version</h3>
<p>You can get pre-built versions of EventEmitter from <a href="https://github.com/Olical/EventEmitter/downloads">the downloads page</a>. I would recommend using the latest version. It's the latest for a reason.</p>
<h3><a id="user-content-installing-the-component-with-bower" class="anchor" aria-hidden="true" href="#installing-the-component-with-bower"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing the component with Bower</h3>
<p>EventEmitter can also be found in the <a href="https://github.com/twitter/bower">Bower package manager</a>. You can install with the following line.</p>
<div class="highlight highlight-source-shell"><pre>bower install eventEmitter</pre></div>
<p>You can also register EventEmitter as a dependency of your own Bower components for easy installation.</p>
<h2><a id="user-content-loading-the-script" class="anchor" aria-hidden="true" href="#loading-the-script"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading the script</h2>
<h3><a id="user-content-browser-via-script-tag" class="anchor" aria-hidden="true" href="#browser-via-script-tag"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser via script tag</h3>
<p>This is so obvious it hurts. Just remember to set the right path to load from.</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>/assets/js/EventEmitter/EventEmitter.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>Or maybe you want to load a minified version you downloaded...</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>/assets/js/EventEmitter-VERSION.min.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>You can then access it in your code like so.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> ee <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">EventEmitter</span>();</pre></div>
<h3><a id="user-content-browser-via-amd" class="anchor" aria-hidden="true" href="#browser-via-amd"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser via AMD</h3>
<p>I love AMD, so I implemented it in EventEmitter. If the script is loaded into a page containing an AMD loader (such as <a href="http://requirejs.org/" rel="nofollow">RequireJS</a>) then it will not be placed in the global namespace as it usually is. Instead it must be accessed via AMD like this.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">require</span>([<span class="pl-s"><span class="pl-pds">'</span>EventEmitter<span class="pl-pds">'</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">EventEmitter</span>) {
    <span class="pl-k">var</span> ee <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">EventEmitter</span>();
});</pre></div>
<h3><a id="user-content-nodejs-or-browser-via-browserify" class="anchor" aria-hidden="true" href="#nodejs-or-browser-via-browserify"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>node.js or Browser via Browserify</h3>
<p>This is pretty simple, just install the file via npm (or bower):</p>
<div class="highlight highlight-source-shell"><pre>npm install wolfy87-eventemitter --save</pre></div>
<p>...and then require it (if you used bower you have to require the relative path to the bower component)</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> EventEmitter <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>wolfy87-eventemitter<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> ee <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">EventEmitter</span>();</pre></div>
<h2><a id="user-content-extending-with-the-eventemitter-class" class="anchor" aria-hidden="true" href="#extending-with-the-eventemitter-class"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending with the EventEmitter class</h2>
<p>You probably won't want to use EventEmitter as a raw class. You will probably want to write a <code>Player</code> class or something like that and implement EventEmitter's methods into it. To do this you will need to clone and merge EventEmitter's prototype object into your classes prototype object. Here is how I would do that with MooTools, I am sure there are alternatives for almost all other frameworks.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">Player</span>(){}
<span class="pl-smi">Player</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-en">clone</span>(<span class="pl-smi">EventEmitter</span>.<span class="pl-c1">prototype</span>);</pre></div>
<p>If you do not want to use a huge framework like that then you might want to use this script I wrote, <a href="https://github.com/Olical/Heir">Heir</a>. It just makes prototypical inheritance nice and easy. So here is how you would inherit EventEmitter's methods with Heir.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">Player</span>(){}
<span class="pl-smi">heir</span>.<span class="pl-en">inherit</span>(Player, EventEmitter);</pre></div>
<p>That's all there is to it.</p>
<h2><a id="user-content-using-eventemitter" class="anchor" aria-hidden="true" href="#using-eventemitter"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using EventEmitter</h2>
<p>So by now you should be able to download a copy of the script, load it into your page and either use it on it's own or implement it's methods into your own classes. Now you need to work out how to actually use the script.</p>
<p>For all of the following examples we are going to presume the following code has already been executed.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> ee <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">EventEmitter</span>();</pre></div>
<p>This code simply creates an instance of EventEmitter to be used.</p>
<h3><a id="user-content-adding-listeners" class="anchor" aria-hidden="true" href="#adding-listeners"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding listeners</h3>
<p>A listener is a function that is executed when an event is emitted. You can add them in a multitude of ways, the simplest of which is with the <code>addListener</code> method.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>The foo event has been emitted.<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListener</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, listener);</pre></div>
<p>You can also add in bulk using the <code>addListeners</code> method (notice the "s" on the end). You can interact with addListeners in two ways, the first is to pass it an event name and array of listeners to add.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>ONE<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>TWO<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, [listener1, listener2]);</pre></div>
<p>The second way of calling addListeners involves passing an object of event names and listeners. You can either pass a single listener for each event or an array, just as you can see above.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>ONE<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>TWO<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener3</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>THREE<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>({
    foo<span class="pl-k">:</span> [listener1, listener2],
    bar<span class="pl-k">:</span> listener3
});</pre></div>
<h3><a id="user-content-removing-listeners" class="anchor" aria-hidden="true" href="#removing-listeners"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Removing listeners</h3>
<p>This works in the <em>exact</em> same way as adding listeners. The only difference is that you replace the <code>add</code> in the method names with <code>remove</code>. Like this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>The foo event has been emitted.<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListener</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, listener);
<span class="pl-smi">ee</span>.<span class="pl-en">removeListener</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, listener);</pre></div>
<p>If you want a listener to remove itself after it has been called or after a condition has been met then all you need to do is return true.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-c"><span class="pl-c">//</span> If a condition is met then remove the listener</span>
    <span class="pl-k">if</span>(completed) {
        <span class="pl-k">return</span> <span class="pl-c1">true</span>;
    }
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-c"><span class="pl-c">//</span> Always remove after use</span>
    <span class="pl-k">return</span> <span class="pl-c1">true</span>;
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, [listener1, listener2]);
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);</pre></div>
<p>If you do not want to, or can't for some reason, return true, you can set the return value using <code>setOnceReturnValue</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener</span>() {
    <span class="pl-c"><span class="pl-c">//</span> Always remove after use</span>
    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">'</span>REMOVE-ME<span class="pl-pds">'</span></span>;
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListener</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, listener);
<span class="pl-smi">ee</span>.<span class="pl-en">setOnceReturnValue</span>(<span class="pl-s"><span class="pl-pds">'</span>REMOVE-ME<span class="pl-pds">'</span></span>);
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);</pre></div>
<p>Alternatively you can use the <code>addOnceListener</code> method, or it's alias, <code>once</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener</span>() {
    <span class="pl-c"><span class="pl-c">//</span> Do stuff</span>
}

<span class="pl-smi">ee</span>.<span class="pl-en">addOnceListener</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, listener);
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> The listener will be removed now...</span>
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);

<span class="pl-c"><span class="pl-c">//</span> The listener will only be executed once.</span></pre></div>
<p>You can also remove whole events and all of their attached listeners with the <code>removeEvent</code> method. If you pass an event name to the method then it will remove that event and it's listeners.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>ONE<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>TWO<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, [listener1, listener2]);
<span class="pl-smi">ee</span>.<span class="pl-en">removeEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);</pre></div>
<p>However, if you leave it blank and do not pass an event name, then <strong>all</strong> events will be removed. It will wipe everything.</p>
<h3><a id="user-content-fetching-the-listeners" class="anchor" aria-hidden="true" href="#fetching-the-listeners"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fetching the listeners</h3>
<p>If you really need to then you can get an array of all listeners attached to an event with the <code>getListeners</code> method.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>ONE<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>TWO<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, [listener1, listener2]);
<span class="pl-smi">ee</span>.<span class="pl-en">getListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);</pre></div>
<h3><a id="user-content-emitting-events" class="anchor" aria-hidden="true" href="#emitting-events"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Emitting events</h3>
<p>So once you have added your listeners and you are ready to start executing them, you can start to use the <code>emitEvent</code> method. At it's most basic level it will just execute all listeners attached to an event.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">listener1</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>ONE<span class="pl-pds">'</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">listener2</span>() {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>TWO<span class="pl-pds">'</span></span>);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListeners</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>, [listener1, listener2]);
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>);</pre></div>
<p>For more control, you can pass an arguments array as the second argument. This array will be applied to every listener as individual arguments.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">adder</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(a <span class="pl-k">+</span> b);
}

<span class="pl-smi">ee</span>.<span class="pl-en">addListener</span>(<span class="pl-s"><span class="pl-pds">'</span>addStuff<span class="pl-pds">'</span></span>, adder);
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-s"><span class="pl-pds">'</span>addStuff<span class="pl-pds">'</span></span>, [<span class="pl-c1">10</span>, <span class="pl-c1">20</span>]);</pre></div>
<h3><a id="user-content-method-aliases" class="anchor" aria-hidden="true" href="#method-aliases"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Method aliases</h3>
<p><a href="https://github.com/Hebo">Hebo</a>, from GitHub, <a href="https://github.com/Olical/EventEmitter/pull/35#issuecomment-9920932">contributed three aliases</a> to add, remove and emit. The aliases can be found in the <a href="https://github.com/Olical/EventEmitter/blob/master/docs/api.md">API documentation</a> but here is the mapping.</p>
<ul>
<li><code>on</code> - <code>addListener</code></li>
<li><code>off</code> - <code>removeListener</code></li>
<li><code>trigger</code> - <code>emitEvent</code></li>
</ul>
<p>I've also added one since then.</p>
<ul>
<li><code>once</code> - <code>addOnceListener</code></li>
</ul>
<h3><a id="user-content-using-regular-expressions" class="anchor" aria-hidden="true" href="#using-regular-expressions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using regular expressions</h3>
<p>You can pass a regular expression to pretty much every function in EventEmitter in place of an event name string. So if you have two events, say, bar and baz, you can manipulate both of them with <code>/ba[rz]/</code>.</p>
<p>This applies to adding, removing and emitting events as well as a few others. There is one thing you have to remember when using this though, you must have the event defined before you use it in a regex.</p>
<p>By defined I mean, it has to have some other listener added to it, or you have to explicitly define it with the <code>defineEvent</code> / <code>defineEvents</code> functions. Here is an example of defining some events and adding to both with a regular expression.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">ee</span>.<span class="pl-en">defineEvents</span>([<span class="pl-s"><span class="pl-pds">'</span>bar<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>baz<span class="pl-pds">'</span></span>]);
<span class="pl-smi">ee</span>.<span class="pl-en">addListener</span>(<span class="pl-sr"><span class="pl-pds">/</span>ba<span class="pl-c1">[rz]</span><span class="pl-pds">/</span></span>, <span class="pl-k">function</span> () {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Now you are thinking with regular expressions.<span class="pl-pds">'</span></span>);
});
<span class="pl-smi">ee</span>.<span class="pl-en">emitEvent</span>(<span class="pl-sr"><span class="pl-pds">/</span>ba<span class="pl-c1">[rz]</span><span class="pl-pds">/</span></span>);</pre></div>
</article>
  </div>

  </div>

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.15554s from unicorn-7cbdbb9476-bc546">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-mal0oz3cFcr4OqIE2eo7Pmax6HtpOKvQfO4vqg9JuCb+iaf4H3KUP9Aryp4oP5mSMgEYUOwgBOAL6MTFaeCZ3w==" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-3c69a4d015c4208bce7a9d5e4e15a914.js"></script>
    <script crossorigin="anonymous" integrity="sha512-j7P2Pw3104HznNqyNm7WuCF8Lstcf/sPX5meP6e5RFF177kmi6SAbkZ52A3ttKj0cRHLRrUbk7C1w1xtwh52zA==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-c163002918ede72971a36e0025f67a4a.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-JqlOv+i1ISrxMNtVk5Y7FZ+XqmYzlpde5p7ZDlGHjqq8w09z4rI62CBGLPo7htBEFHScXsms6xRa6EA4uqZiMQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-f4300b5109af30ec68e7467a3342801c.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

