docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=admin -v pgdata:/var/lib/postgresql/data -d postgres


Work with AI

considére la structure de mon app angular comme la suivante

src/
    app/
        chart/
            chart.module.ts
        components/
            home/
            home.component.ts
            home.component.html
            home.component.scss
            home.component.spec.ts
            login/
            login.component.ts
            login.component.html
            login.component.scss
            login.component.spec.ts
        guards/
            auth.guard.ts
        models/
            login-response.model
            user-credentials.model
        services/
            login-service/
            auth.service.spec.ts
            auth.service.ts
        
        app.component.ts
        app.component.html
        app.component.scss
        app.component.spec.ts
        app-routing.module.ts
        assets/
            canvasjs.angular.component.ts
            canvasjs.min.js
    favicon.ico
    index.html
    main.ts
    styles.scss
angular.json
package-lock.json
package.json
proxy.conf.json
tsconfig.app.json
tsconfig.json
tsconfig.spec.json

styles.scss = @import "https://fonts.googleapis.com/css?family=Open+Sans";.btn{display:inline-block;*display:inline;*zoom:1;padding:4px 10px;margin-bottom:0;font-size:13px;line-height:18px;color:#333;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,0.75);vertical-align:middle;background-color:#f5f5f5;background-image:-moz-linear-gradient(top,#fff,#e6e6e6);background-image:-ms-linear-gradient(top,#fff,#e6e6e6);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));background-image:-webkit-linear-gradient(top,#fff,#e6e6e6);background-image:-o-linear-gradient(top,#fff,#e6e6e6);background-image:linear-gradient(top,#fff,#e6e6e6);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff,endColorstr=#e6e6e6,GradientType=0);border-color:#e6e6e6;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);border:1px solid #e6e6e6;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);cursor:pointer;*margin-left:.3em}.btn:hover,.btn:active,.btn.active,.btn.disabled,.btn[disabled]{background-color:#e6e6e6}.btn-large{padding:9px 14px;font-size:15px;line-height:normal;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.btn:hover{color:#333;text-decoration:none;background-color:#e6e6e6;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-ms-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn-primary,.btn-primary:hover{text-shadow:0 -1px 0 rgba(0,0,0,0.25);color:#fff}.btn-primary.active{color:rgba(255,255,255,0.75)}.btn-primary{background-color:#4a77d4;background-image:-moz-linear-gradient(top,#6eb6de,#4a77d4);background-image:-ms-linear-gradient(top,#6eb6de,#4a77d4);background-image:-webkit-gradient(linear,0 0,0 100%,from(#6eb6de),to(#4a77d4));background-image:-webkit-linear-gradient(top,#6eb6de,#4a77d4);background-image:-o-linear-gradient(top,#6eb6de,#4a77d4);background-image:linear-gradient(top,#6eb6de,#4a77d4);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de,endColorstr=#4a77d4,GradientType=0);border:1px solid #3762bc;text-shadow:1px 1px 1px rgba(0,0,0,0.4);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.5)}.btn-primary:hover,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled]{filter:none;background-color:#4a77d4}.btn-block{width:100%;display:block}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}html{width:100%;height:100%;overflow:hidden}body{width:100%;height:100%;font-family:'Open Sans',sans-serif;background:#092756;background:-moz-radial-gradient(0% 100%,ellipse cover,rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%),-moz-linear-gradient(-45deg,#670d10 0%,#092756 100%);background:-webkit-radial-gradient(0% 100%,ellipse cover,rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-webkit-linear-gradient(top,rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%),-webkit-linear-gradient(-45deg,#670d10 0%,#092756 100%);background:-o-radial-gradient(0% 100%,ellipse cover,rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-o-linear-gradient(top,rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%),-o-linear-gradient(-45deg,#670d10 0%,#092756 100%);background:-ms-radial-gradient(0% 100%,ellipse cover,rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-ms-linear-gradient(top,rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%),-ms-linear-gradient(-45deg,#670d10 0%,#092756 100%);background:-webkit-radial-gradient(0% 100%,ellipse cover,rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),linear-gradient(to bottom,rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%),linear-gradient(135deg,#670d10 0%,#092756 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3E1D6D',endColorstr='#092756',GradientType=1)}

index.html = <html lang="en"><head> <meta charset="utf-8"> <title>MyFrontApp</title> <base href="/"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="icon" type="image/x-icon" href="favicon.ico"></head><body> <app-root></app-root></body></html>

app.component.scss = :host{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2,h3,h4,h5,h6{margin:8px 0}p{margin:0}.spacer{flex:1}.toolbar{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#1976d2;color:#fff;font-weight:600}.toolbar img{margin:0 16px}.toolbar #twitter-logo{height:40px;margin:0 8px}.toolbar #youtube-logo{height:40px;margin:0 16px}.toolbar #twitter-logo:hover,.toolbar #youtube-logo:hover{opacity:.8}.content{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons{height:24px;width:auto}svg.material-icons:not(:last-child){margin-right:8px}.card svg.material-icons path{fill:#888}.card-container{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card{all:unset;border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:all .2s ease-in-out;line-height:24px}.card-container .card:not(:last-child){margin-right:0}.card.card-small{height:16px;width:168px}.card-container .card:not(.highlight-card){cursor:pointer}.card-container .card:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,0.35)}.card-container .card:not(.highlight-card):hover .material-icons path{fill:#696767}.card.highlight-card{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card span{margin-left:60px}svg#rocket{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a,a:visited,a:hover{color:#1976d2;text-decoration:none}a:hover{color:#125699}.terminal{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal::before{content:"\2022 \2022 \2022";position:absolute;top:0;left:0;height:4px;background:#3a3a3a;color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:1s ease-out}.circle-link:hover{transform:translateY(-0.25rem);box-shadow:0 3px 15px rgba(0,0,0,0.2)}footer{margin-top:8px;display:flex;align-items:center;line-height:20px}footer a{display:flex;align-items:center}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px}svg#clouds{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width: 767px){.card-container > :not(.circle-link),.terminal{width:100%}.card:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card span{margin-left:72px}svg#rocket-smoke{right:120px;transform:rotate(-5deg)}}@media screen and (max-width: 575px){svg#rocket-smoke{display:none;visibility:hidden}}

home.component.html = <div class="home-container"> <div class="top-right-button-container"> <button class="custom-button" (click)="logout()">Logout</button> </div><div [@.disabled]="true"> <mat-tab-group dynamicHeight> <mat-tab label="Column Chart"> <ng-template matTabContent> <canvasjs-chart [options]="columnChartOptions" [styles]="{width: '100%', height: '360px'}" ></canvasjs-chart> </ng-template> </mat-tab> <mat-tab label="Pie Chart"> <ng-template matTabContent> <canvasjs-chart [options]="pieChartOptions" [styles]="{width: '100%', height: '360px'}" ></canvasjs-chart> </ng-template> </mat-tab> <mat-tab label="Line Chart"> <ng-template matTabContent> <canvasjs-chart [options]="lineChartOptions" [styles]="{width: '100%', height: '360px'}" ></canvasjs-chart> </ng-template> </mat-tab> </mat-tab-group> </div></div>

home.component.scss = // Ajoutez ce code à la fin du fichier
.home-container{position:relative;width:100%;height:100%}.top-right-button-container{position:absolute;top:16px;right:16px;z-index:1000}.custom-button{background-color:#4CAF50;border:none;color:#fff;text-align:center;text-decoration:none;display:inline-block;font-size:14px;padding:8px 16px;cursor:pointer;border-radius:4px;transition-duration:.4s;&:hover {;background-color:#45a049}}


J'aimerais pourvoir voir les mat-tab un peux plus car actuellement ils se fondents trop dans le background
