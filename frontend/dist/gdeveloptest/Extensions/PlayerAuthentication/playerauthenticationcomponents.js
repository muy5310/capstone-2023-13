var gdjs;(function(y){const g=new y.Logger("Player Authentication");let u;(function(s){const m=({platform:o,isGameRegistered:t})=>t?{title:"Logging in...",text1:o==="cordova"?"One moment, we're opening a window for you to log in.":"One moment, we're opening a new page with your web browser for you to log in.",text2:"If the window did not open, please check your pop-up blocker and click the button below to try again."}:{title:"Publish your game!",text1:"GDevelop's player accounts are only available for published games.",text2:"Click the button below to learn how to publish your game then try again."};s.computeAuthenticationContainer=function(o){const t=document.createElement("div");t.id="authentication-root-container",t.style.position="relative",t.style.backgroundColor="rgba(14, 6, 45, 0.5)",t.style.opacity="1",t.style.width="100%",t.style.height="100%",t.style.zIndex="2",t.style.pointerEvents="all";const n=document.createElement("div");n.id="authentication-sub-container",n.style.backgroundColor="#FFFFFF",n.style.position="absolute",n.style.top="16px",n.style.bottom="16px",n.style.left="16px",n.style.right="16px",n.style.borderRadius="8px",n.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",n.style.padding="16px";const a=document.createElement("div");a.style.cursor="pointer",a.style.display="flex",a.style.justifyContent="right",a.style.alignItems="center",a.style.zIndex="3",r(a,o);const e=document.createElement("img");e.setAttribute("width","15px"),e.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODUzNTUgMC4xNDY0NDdDOC4wNDg4MiAwLjM0MTcwOSA4LjA0ODgyIDAuNjU4MjkxIDcuODUzNTUgMC44NTM1NTNMMC44NTM1NTMgNy44NTM1NUMwLjY1ODI5MSA4LjA0ODgyIDAuMzQxNzA5IDguMDQ4ODIgMC4xNDY0NDcgNy44NTM1NUMtMC4wNDg4MTU1IDcuNjU4MjkgLTAuMDQ4ODE1NSA3LjM0MTcxIDAuMTQ2NDQ3IDcuMTQ2NDVMNy4xNDY0NSAwLjE0NjQ0N0M3LjM0MTcxIC0wLjA0ODgxNTUgNy42NTgyOSAtMC4wNDg4MTU1IDcuODUzNTUgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNDY0NDcgMC4xNDY0NDdDMC4zNDE3MDkgLTAuMDQ4ODE1NSAwLjY1ODI5MSAtMC4wNDg4MTU1IDAuODUzNTUzIDAuMTQ2NDQ3TDcuODUzNTUgNy4xNDY0NUM4LjA0ODgyIDcuMzQxNzEgOC4wNDg4MiA3LjY1ODI5IDcuODUzNTUgNy44NTM1NUM3LjY1ODI5IDguMDQ4ODIgNy4zNDE3MSA4LjA0ODgyIDcuMTQ2NDUgNy44NTM1NUwwLjE0NjQ0NyAwLjg1MzU1M0MtMC4wNDg4MTU1IDAuNjU4MjkxIC0wLjA0ODgxNTUgMC4zNDE3MDkgMC4xNDY0NDcgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+Cjwvc3ZnPgo="),a.appendChild(e);const i=document.createElement("div");i.id="authentication-container-loader",i.style.display="flex",i.style.flexDirection="column",i.style.height="100%",i.style.width="100%",i.style.justifyContent="center",i.style.alignItems="center";const l=document.createElement("img");l.setAttribute("width","28px"),l.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0Ij48L2NpcmNsZT4KPHBhdGggb3BhY2l0eT0nMC43NScgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3oiPjwvcGF0aD4KPC9zdmc+"),l.style.marginTop="50px";try{l.animate([{transform:"rotate(0deg)"},{transform:"rotate(359deg)"}],{duration:3e3,iterations:1/0})}catch{g.warn("Animation not supported, loader will be fixed.")}return i.appendChild(l),n.appendChild(a),n.appendChild(i),t.appendChild(n),{rootContainer:t,loaderContainer:i}},s.addAuthenticationTextsToLoadingContainer=(o,t,n,a)=>{const e=document.createElement("div");e.id="authentication-container-texts",e.style.display="flex",e.style.flexDirection="column",e.style.width="100%",e.style.justifyContent="center",e.style.alignItems="center",e.style.position="relative",e.style.zIndex="3",e.style.fontSize="11pt",e.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';const i=m({platform:t,isGameRegistered:n}),l=document.createElement("h1");l.innerText=i.title,l.style.fontSize="20pt",l.style.fontWeight="bold";const M=document.createElement("p");M.innerText=i.text1;const D=document.createElement("p");if(D.innerText=i.text2,e.appendChild(l),e.appendChild(M),e.appendChild(D),!n&&(o.innerHTML="",a)){const c=document.createElement("a");r(c,a),c.innerText="How to publish my game",c.style.color="#0078d4",c.style.textDecoration="none",c.style.textDecoration="underline",c.style.cursor="pointer",e.appendChild(c)}return o.prepend(e),e},s.addAuthenticationUrlToTextsContainer=(o,t)=>{const n=document.createElement("a");r(n,o),n.innerText="Try again",n.style.color="#0078d4",n.style.textDecoration="none",n.style.textDecoration="underline",n.style.cursor="pointer",t.appendChild(n)},s.computeDismissableBanner=function(o){const t=document.createElement("div");t.id="authenticated-banner",t.style.position="absolute",t.style.pointerEvents="all",t.style.backgroundColor="#0E062D",t.style.top="0px",t.style.height="48px",t.style.left="0px",t.style.width="100%",t.style.padding="6px 16px",t.style.zIndex="1",t.style.display="flex",t.style.flexDirection="row-reverse",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.style.fontSize="11pt",t.style.color="#FFFFFF",t.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';const n=document.createElement("div");n.style.cursor="pointer",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.zIndex="3",n.style.marginRight="32px",n.style.height="100%",r(n,o);const a=document.createElement("img");return a.setAttribute("width","30px"),a.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjc1IDguMDEyNUwyMS45ODc1IDYuMjVMMTUgMTMuMjM3NUw4LjAxMjUgNi4yNUw2LjI1IDguMDEyNUwxMy4yMzc1IDE1TDYuMjUgMjEuOTg3NUw4LjAxMjUgMjMuNzVMMTUgMTYuNzYyNUwyMS45ODc1IDIzLjc1TDIzLjc1IDIxLjk4NzVMMTYuNzYyNSAxNUwyMy43NSA4LjAxMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"),n.appendChild(a),t.appendChild(n),t},s.computeAuthenticatedBanner=function(o,t,n){const a=s.computeDismissableBanner(t),e=n||"Anonymous",i=document.createElement("div"),l=document.createElement("p");l.id="loggedText",l.innerHTML=`<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
                                Logged as ${e}`,l.style.margin="0px";const M=document.createElement("p");return M.id="changeAccountText",M.innerText="Click here to switch to another account.",M.style.margin="0px",M.style.marginTop="4px",M.style.textDecoration="underline",M.style.cursor="pointer",r(M,o),i.appendChild(l),i.appendChild(M),a.appendChild(i),a},s.computeNotAuthenticatedBanner=function(o,t){const n=s.computeDismissableBanner(t),a=document.createElement("div"),e=document.createElement("p");e.id="loggedText",e.innerHTML="You are not authenticated.",e.style.margin="0px";const i=document.createElement("p");return i.id="changeAccountText",i.innerText="Click here to log in.",i.style.margin="0px",i.style.marginTop="4px",i.style.textDecoration="underline",i.style.cursor="pointer",r(i,o),a.appendChild(e),a.appendChild(i),n.appendChild(a),n},s.displayLoggedInNotification=function(o,t){s.showNotification(o,"authenticated-notification",`<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
              Logged as ${t}`,"success")},s.displayLoggedOutNotification=function(o){s.showNotification(o,"authenticated-notification",`<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
              Logged out`,"success")},s.displayErrorNotification=function(o){s.showNotification(o,"error-notification","An error occurred while authenticating, please try again.","error")},s.showNotification=function(o,t,n,a){const e=document.createElement("div");e.id=t,e.style.position="absolute",e.style.pointerEvents="all",e.style.backgroundColor=a==="success"?"#0E062D":"red",e.style.top="12px",e.style.right="16px",e.style.padding="6px 32px 6px 6px",e.style.zIndex="1",e.style.display="flex",e.style.flexDirection="row-reverse",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",e.style.borderRadius="4px",e.style.fontSize="11pt",e.style.color="#FFFFFF",e.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';try{e.animate([{transform:"translateY(-30px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:700,easing:"ease-out"})}catch{g.warn("Animation not supported, div will be fixed.")}const i=document.createElement("p");i.id="loggedText",i.innerHTML=n,i.style.margin="0px",e.appendChild(i),o.appendChild(e);const l=700,M=5e3;setTimeout(()=>{try{e.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(-30px)",opacity:0}],{duration:l,easing:"ease-in"})}catch{g.warn("Animation not supported, div will be fixed.")}},M),setTimeout(()=>{e.remove()},M+l)};const r=function(o,t){o.addEventListener("touchstart",n=>{t()}),o.addEventListener("click",n=>{t()})}})(u=y.playerAuthenticationComponents||(y.playerAuthenticationComponents={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=playerauthenticationcomponents.js.map
