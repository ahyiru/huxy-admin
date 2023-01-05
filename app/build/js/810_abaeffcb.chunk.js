(self.webpackChunk=self.webpackChunk||[]).push([[810],{8810:function(ge,De,ve){(function(he,ie){ge.exports=ie(ve(7378))})(this,function(he){return function(){"use strict";var ie={435:function(e,t,o){var h=o(703),u=o.n(h),n=o(414),c=o.n(n),i=c()(u());i.push([e.id,`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > a {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > a {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > a {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > a {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: 0 var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,""]),i.locals={},t.Z=i},232:function(e,t,o){var h=o(703),u=o.n(h),n=o(414),c=o.n(n),i=c()(u());i.push([e.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),i.locals={},t.Z=i},705:function(e,t,o){var h=o(703),u=o.n(h),n=o(414),c=o.n(n),i=c()(u());i.push([e.id,`.frame-color h1,
.frame-color h2,
.frame-color h3,
.frame-color h4,
.frame-color h5,
.frame-color h6,
.frame-color p {
  color: var(--linkColor);
}
.frame-color a {
  color: var(--linkColor);
}
.frame-color a:active,
.frame-color a.active {
  color: var(--linkActiveColor);
}
.frame-color a:hover {
  color: var(--linkHoverColor);
}
:root {
  --frame-spacing: 1vw;
  --frame-radius: 4px;
  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
}
.frame {
  transform: none;
  --topHeight: var(--headerHeight);
  --blur: 0.3rem;
  --opacity: 0.75;
  background: var(--appBgColor);
  color: var(--appColor);
}
.frame .frame-header {
  backdrop-filter: blur(var(--blur));
  background: rgba(var(--navBgRgb), var(--opacity));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.frame .frame-header h1,
.frame .frame-header h2,
.frame .frame-header h3,
.frame .frame-header h4,
.frame .frame-header h5,
.frame .frame-header h6,
.frame .frame-header p {
  color: var(--linkColor);
}
.frame .frame-header a {
  color: var(--linkColor);
}
.frame .frame-header a:active,
.frame .frame-header a.active {
  color: var(--linkActiveColor);
}
.frame .frame-header a:hover {
  color: var(--linkHoverColor);
}
.frame .frame-main {
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-top: var(--topHeight);
  box-shadow: var(--boxShadow);
  z-index: 5;
}
.frame .frame-main .frame-container {
  position: relative;
}
.frame .frame-main .frame-container .frame-aside {
  position: fixed;
  width: var(--menuWidth);
  top: var(--topHeight);
  bottom: 0;
  z-index: 5;
  background: var(--menuBgColor);
  transform: translate3d(0, 0, 0);
  transition: width 0.3s;
}
.frame .frame-main .frame-container .frame-aside h1,
.frame .frame-main .frame-container .frame-aside h2,
.frame .frame-main .frame-container .frame-aside h3,
.frame .frame-main .frame-container .frame-aside h4,
.frame .frame-main .frame-container .frame-aside h5,
.frame .frame-main .frame-container .frame-aside h6,
.frame .frame-main .frame-container .frame-aside p {
  color: var(--linkColor);
}
.frame .frame-main .frame-container .frame-aside a {
  color: var(--linkColor);
}
.frame .frame-main .frame-container .frame-aside a:active,
.frame .frame-main .frame-container .frame-aside a.active {
  color: var(--linkActiveColor);
}
.frame .frame-main .frame-container .frame-aside a:hover {
  color: var(--linkHoverColor);
}
.frame .frame-main .frame-container .frame-view {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
}
.frame .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
  background: var(--panelBgColor);
}
.frame .frame-main .frame-container.no-sidebar .frame-view {
  padding-left: 0;
}
.frame .frame-main .frame-container.no-sidebar .frame-footer {
  padding-left: 0;
  margin-left: calc(var(--maxWidth) / 2 - 50vw);
  margin-right: calc(var(--maxWidth) / 2 - 50vw);
}
.frame.collapsed .frame-main .frame-container .frame-aside {
  width: var(--collapseWidth);
  transition: width 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-view {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--collapseWidth));
  transition: padding-left 0.3s;
}
.frame.horizontal {
  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));
}
.frame.detached {
  --frame-spacing: 0.8vw;
  --frame-radius: 4px;
}
/*
@media screen and (max-width:@maxWidth){
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          left: 0;
        }
      }
    }
  }
}*/
/*@media screen and (max-width: env(--viewport-1)) {
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          // left: 0;
        }
      }
    }
  }
}*/
@media screen and (max-width: 1024px) {
  .frame .frame-main .frame-container .frame-aside {
    width: 0;
  }
  .frame .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-aside {
    width: var(--menuWidth);
    backdrop-filter: blur(var(--blur));
    background: rgba(var(--menuBgRgb), var(--opacity));
  }
  .frame.collapsed .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
}
`,""]),i.locals={},t.Z=i},916:function(e,t,o){var h=o(703),u=o.n(h),n=o(414),c=o.n(n),i=c()(u());i.push([e.id,`.clear {
  zoom: 1;
}
.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-top-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 0.98;
    visibility: visible;
    transform: translate3d(0, 2px, 0);
  }
}
.huxy-header-angle-top {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-top::before {
  left: 0;
}
.huxy-header-angle-top::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  top: calc(50% - var(--pos));
}
.huxy-header-angle-top::before {
  transform: rotate(225deg);
}
.huxy-header-angle-top::after {
  transform: rotate(-45deg);
}
.huxy-header-angle-bt {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-bt::before {
  left: 0;
}
.huxy-header-angle-bt::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  top: calc(50% + var(--pos));
}
.huxy-header-angle-bt::before {
  transform: rotate(135deg);
}
.huxy-header-angle-bt::after {
  transform: rotate(45deg);
}
.huxy-header-arrow-lt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: auto;
  left: 0;
  z-index: 100000;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-lt::before {
  border-width: 8px;
}
.huxy-header-arrow-lt::after {
  border-width: 7px;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-lt::before {
  left: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-lt::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.huxy-header-arrow-rt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: 0;
  left: auto;
  z-index: 100000;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-rt::before {
  border-width: 8px;
}
.huxy-header-arrow-rt::after {
  border-width: 7px;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-rt::before {
  right: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-rt::after {
  right: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.header {
  --subMenuItemHeight: 40px;
  max-width: var(--maxWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  margin: 0 auto;
  position: relative;
}
.header .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--menuWidth);
  background: var(--bannerBgColor);
  z-index: 1;
  height: 100%;
  padding-left: 15px;
  padding-right: 10px;
  display: flex;
  transition: width 0.3s;
}
.header .banner .logo {
  height: 100%;
  font-size: 0;
}
.header .banner .logo > img {
  height: 55%;
}
.header .banner .title {
  padding-left: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav {
  padding-left: var(--menuWidth);
  transition: padding-left 0.3s;
}
.header .nav .nav-wrap {
  padding: 0 10px;
  position: relative;
  display: flex;
  zoom: 1;
}
.header .nav .nav-wrap::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul,
.header .nav .nav-wrap .nav-right > ul {
  margin: 0;
  zoom: 1;
}
.header .nav .nav-wrap .nav-left > ul::after,
.header .nav .nav-wrap .nav-right > ul::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul > li,
.header .nav .nav-wrap .nav-right > ul > li {
  position: relative;
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li > a,
.header .nav .nav-wrap .nav-right > ul > li > a {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 12px;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > a::before,
.header .nav .nav-wrap .nav-right > ul > li > a::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 2px;
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img img {
  height: 100%;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > a .icon,
.header .nav .nav-wrap .nav-right > ul > li > a .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > a .icon img,
.header .nav .nav-wrap .nav-right > ul > li > a .icon img {
  height: 25%;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > a .img,
.header .nav .nav-wrap .nav-right > ul > li > a .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > a .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .img + .txt {
  margin-left: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > a .img > *,
.header .nav .nav-wrap .nav-right > ul > li > a .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > a .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > a .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > a .txt + .node-icon {
  margin-left: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li ul,
.header .nav .nav-wrap .nav-right > ul > li ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: 135px;
  box-shadow: 0 2px 6px var(--borderColor);
  padding: 2px 0;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  display: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li,
.header .nav .nav-wrap .nav-right > ul > li ul > li {
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,
.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--borderColor);
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a,
.header .nav .nav-wrap .nav-right > ul > li ul > li a {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 15px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .img {
  font-size: 0;
  height: 100%;
  margin-right: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .img img {
  height: 40%;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 10px;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li a > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li a:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li a.active {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li.open ul,
.header .nav .nav-wrap .nav-right > ul > li.open ul {
  display: block;
  animation: huxy-header-animate-top-in 0.2s forwards;
}
.header .nav .nav-wrap .nav-left {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul > li {
  float: left;
  /*>a{
              // border-left:1px solid rgba(0,0,0,.1);
              &::before{
                content:"";
                position:absolute;
                left:0;
                top:calc(@headerHeight / 2 - 10px);
                height:20px;
                width:1px;
                background-color:rgba(0,0,0,.1);
              }
            }*/
}
.header .nav .nav-wrap .nav-right {
  flex: 1;
  float: right;
}
.header .nav .nav-wrap .nav-right > ul {
  float: right;
}
.header .nav .nav-wrap .nav-right > ul > li {
  float: right;
}
.collapsed .frame-header .header .banner {
  width: var(--collapseWidth);
  padding: 0;
  justify-content: center;
  transition: width 0.3s;
}
.collapsed .frame-header .header .banner .title {
  display: none;
}
.collapsed .frame-header .header .nav {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
@media screen and (max-width: 1024px) {
  .header .banner {
    display: none;
  }
  .header .nav {
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-left > ul > li:not(:first-child) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li:not(:first-child) {
    display: none;
  }
}
`,""]),i.locals={},t.Z=i},41:function(e,t,o){var h=o(703),u=o.n(h),n=o(414),c=o.n(n),i=c()(u());i.push([e.id,`@keyframes ani-fade-in {
  0% {
    opacity: 0;
    display: none;
  }
  1% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 1;
    display: block;
  }
}
@keyframes ani-fade-out {
  0% {
    opacity: 1;
    display: block;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes ani-scale-in {
  0% {
    transform: scale(0);
    display: none;
  }
  1% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(1);
    display: block;
  }
}
@keyframes ani-scale-out {
  0% {
    transform: scale(1);
    display: block;
  }
  99% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(0);
    display: none;
  }
}
@keyframes ani-left-in {
  0% {
    opacity: 0;
    transform: translate3d(-72px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ani-left-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(72px, 0, 0);
  }
}
@keyframes ani-top-in {
  0% {
    opacity: 0.4;
    transform: translate(0, -72px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.page-color {
  /*a{
    // color:@pageLinkColor;
    color:@linkActiveColor;
    &:active,&.active{
      color:@linkActiveColor;
    }
    &:hover{
      color:@linkHoverColor;
    }
  }*/
}
.page-color h1,
.page-color h2,
.page-color h3,
.page-color h4,
.page-color h5,
.page-color h6,
.page-color p {
  color: var(--appColor);
}
.page-container {
  min-height: calc(100vh - var(--footerHeight) - var(--topHeight));
  position: relative;
  background: var(--pageBgColor);
}
.page-container .page-content {
  padding: var(--frame-spacing);
  /*a{
    // color:@pageLinkColor;
    color:@linkActiveColor;
    &:active,&.active{
      color:@linkActiveColor;
    }
    &:hover{
      color:@linkHoverColor;
    }
  }*/
}
.page-container .page-content.ani-in {
  overflow: hidden;
  animation: ani-left-in 0.5s forwards;
}
.page-container .page-content.ani-out {
  overflow: hidden;
  animation: ani-left-out 0.5s forwards;
}
.page-container .page-content h1,
.page-container .page-content h2,
.page-container .page-content h3,
.page-container .page-content h4,
.page-container .page-content h5,
.page-container .page-content h6,
.page-container .page-content p {
  color: var(--appColor);
}
`,""]),i.locals={},t.Z=i},414:function(e){e.exports=function(t){var o=[];return o.toString=function(){return this.map(function(h){var u="",n=typeof h[5]!="undefined";return h[4]&&(u+="@supports (".concat(h[4],") {")),h[2]&&(u+="@media ".concat(h[2]," {")),n&&(u+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),u+=t(h),n&&(u+="}"),h[2]&&(u+="}"),h[4]&&(u+="}"),u}).join("")},o.i=function(h,u,n,c,i){typeof h=="string"&&(h=[[null,h,void 0]]);var C={};if(n)for(var g=0;g<this.length;g++){var H=this[g][0];H!=null&&(C[H]=!0)}for(var w=0;w<h.length;w++){var v=[].concat(h[w]);n&&C[v[0]]||(typeof i!="undefined"&&(typeof v[5]=="undefined"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=i),u&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=u),c&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=c):v[4]="".concat(c)),o.push(v))}},o}},703:function(e){e.exports=function(t){return t[1]}},53:function(e,t,o){var h=o(899),u=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function g(H,w,v){var I,P={},S=null,R=null;v!==void 0&&(S=""+v),w.key!==void 0&&(S=""+w.key),w.ref!==void 0&&(R=w.ref);for(I in w)c.call(w,I)&&!C.hasOwnProperty(I)&&(P[I]=w[I]);if(H&&H.defaultProps)for(I in w=H.defaultProps,w)P[I]===void 0&&(P[I]=w[I]);return{$$typeof:u,type:H,key:S,ref:R,props:P,_owner:i.current}}t.Fragment=n,t.jsx=g,t.jsxs=g},458:function(e,t,o){e.exports=o(53)},748:function(e){var t=[];function o(n){for(var c=-1,i=0;i<t.length;i++)if(t[i].identifier===n){c=i;break}return c}function h(n,c){for(var i={},C=[],g=0;g<n.length;g++){var H=n[g],w=c.base?H[0]+c.base:H[0],v=i[w]||0,I="".concat(w," ").concat(v);i[w]=v+1;var P=o(I),S={css:H[1],media:H[2],sourceMap:H[3],supports:H[4],layer:H[5]};if(P!==-1)t[P].references++,t[P].updater(S);else{var R=u(S,c);c.byIndex=g,t.splice(g,0,{identifier:I,updater:R,references:1})}C.push(I)}return C}function u(n,c){var i=c.domAPI(c);i.update(n);var C=function(g){if(g){if(g.css===n.css&&g.media===n.media&&g.sourceMap===n.sourceMap&&g.supports===n.supports&&g.layer===n.layer)return;i.update(n=g)}else i.remove()};return C}e.exports=function(n,c){c=c||{},n=n||[];var i=h(n,c);return function(C){C=C||[];for(var g=0;g<i.length;g++){var H=i[g],w=o(H);t[w].references--}for(var v=h(C,c),I=0;I<i.length;I++){var P=i[I],S=o(P);t[S].references===0&&(t[S].updater(),t.splice(S,1))}i=v}}},736:function(e){var t={};function o(u){if(typeof t[u]=="undefined"){var n=document.querySelector(u);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(c){n=null}t[u]=n}return t[u]}function h(u,n){var c=o(u);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}e.exports=h},706:function(e){function t(o){var h=document.createElement("style");return o.setAttributes(h,o.attributes),o.insert(h,o.options),h}e.exports=t},567:function(e,t,o){function h(u){var n=o.nc;n&&u.setAttribute("nonce",n)}e.exports=h},306:function(e){function t(u,n,c){var i="";c.supports&&(i+="@supports (".concat(c.supports,") {")),c.media&&(i+="@media ".concat(c.media," {"));var C=typeof c.layer!="undefined";C&&(i+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),i+=c.css,C&&(i+="}"),c.media&&(i+="}"),c.supports&&(i+="}");var g=c.sourceMap;g&&typeof btoa!="undefined"&&(i+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),n.styleTagTransform(i,u,n.options)}function o(u){if(u.parentNode===null)return!1;u.parentNode.removeChild(u)}function h(u){var n=u.insertStyleElement(u);return{update:function(c){t(n,u,c)},remove:function(){o(n)}}}e.exports=h},62:function(e){function t(o,h){if(h.styleSheet)h.styleSheet.cssText=o;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(o))}}e.exports=t},899:function(e){e.exports=he}},ce={};function y(e){var t=ce[e];if(t!==void 0)return t.exports;var o=ce[e]={id:e,exports:{}};return ie[e](o,o.exports,y),o.exports}(function(){y.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return y.d(t,{a:t}),t}})(),function(){y.d=function(e,t){for(var o in t)y.o(t,o)&&!y.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){y.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){y.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){y.nc=void 0}();var ne={};return function(){y.r(ne),y.d(ne,{default:function(){return Oe}});var e=y(458),t=y(899),o=()=>![typeof window,typeof document].includes("undefined"),h=r=>Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),u=r=>h(r).indexOf("element")>-1,n=(r=null)=>{var a,l;return o()?u(r)?{width:r.clientWidth,height:r.clientHeight}:{width:(a=window.innerWidth)!=null?a:document.documentElement.clientWidth,height:(l=window.innerHeight)!=null?l:document.documentElement.clientHeight}:{width:0,height:0}},c=(r={})=>{const a=(0,t.useRef)(0),[l,d]=(0,t.useState)(r),s=(0,t.useCallback)(x=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>d(x))},[]);return(0,t.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]),[l,s]},i=()=>{const[r,a]=c(n());return(0,t.useEffect)(()=>{const l=()=>a(n());return window.addEventListener("resize",l,!1),()=>window.removeEventListener("resize",l,!1)},[]),r},C=r=>h(r)==="array",g=(r,a,l="id",d="children")=>{if(!C(r))return null;const s=x=>{for(let p=0,m=x.length;p<m;p++){const b=x[p];if(b[l]===a)return[b];if(C(b[d])){const k=s(b[d]);if(k)return[b].concat(k)}}};return s(r)},H=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),w=()=>{let r=H();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const l=(r+Math.random()*16)%16|0;return r=Math.floor(r/16),(a==="x"?l:l&3|8).toString(16)})};const v=r=>++r;var I=()=>{const[,r]=(0,t.useState)(0);return(0,t.useCallback)(()=>r(v),[])},P=r=>C(r)&&!!r.length;const S=({item:r,to:a,preventDefault:l,stopPropagation:d,...s})=>(0,e.jsx)("a",{href:l?null:a,...s}),R=({item:r,...a})=>(0,e.jsx)("ul",{...a}),me=(r,...a)=>{const l={};return Object.keys(r).filter(Boolean).map(d=>{l[d]=s=>r[d](s,...a)}),l},de=({data:r=[],events:a={},List:l=R,Link:d=S,leftIcon:s,rightIcon:x,level:p=0})=>r.map(m=>{const{name:b,path:k,icon:f,rightIcon:j,active:z,open:N,children:W,linkProps:B}=m,U=P(W),_=me(a,m,p,U),T=m.id||k||b,L=f!=null?f:s,X=j!=null?j:x;return U?(0,e.jsxs)("li",{className:N?"open":"","has-children":"true",..._,children:[(0,e.jsxs)(d,{item:{...m,level:p},className:z?"active":"",to:k,preventDefault:!0,stopPropagation:!1,...B,children:[L?(0,e.jsx)("div",{className:"node-left-icon",children:L===!0?(0,e.jsx)("i",{className:"default-left-icon"}):L}):null,b?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:b})}):null,X?(0,e.jsx)("div",{className:"node-right-icon",children:X===!0?(0,e.jsx)("i",{className:"default-right-icon"}):X}):null]}),(0,e.jsx)(l,{item:m,children:de({data:W,events:a,List:l,Link:d,leftIcon:s,rightIcon:x,level:p+1})})]},T):(0,e.jsx)("li",{..._,children:(0,e.jsxs)(d,{item:{...m,level:p},className:z?"active":"",to:k,...B,children:[L?(0,e.jsx)("div",{className:"node-left-icon",children:L===!0?(0,e.jsx)("i",{className:"default-left-icon"}):L}):null,b?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:b})}):null]})},T)});var be=de,ke=()=>{const r=(0,t.useRef)(!0);return r.current?(r.current=!1,!0):!1},we=({item:r,style:a,...l})=>{var d;const{uuid:s,open:x}=r,p=(0,t.useRef)(),m=(0,t.useRef)(),b=ke(),[k,f]=(0,t.useState)("");return(0,t.useEffect)(()=>{const j=p.current,z=x?`${j.scrollHeight}px`:"0px";f(z)},[]),(0,t.useEffect)(()=>{if(b)return;const j=p.current,z=x?"0px":`${j.scrollHeight}px`;return f(z),m.current=setTimeout(()=>{const N=x?`${j.scrollHeight}px`:"0px";f(N)},5),()=>clearTimeout(m.current)},[x,(d=r.children)==null?void 0:d.length]),(0,t.useEffect)(()=>{s&&f("")},[s]),(0,e.jsx)("ul",{ref:p,style:{...a,maxHeight:k},...l})},ze=y(748),q=y.n(ze),Ce=y(306),Y=y.n(Ce),je=y(736),J=y.n(je),He=y(567),K=y.n(He),Ie=y(706),Q=y.n(Ie),Ne=y(62),V=y.n(Ne),ee=y(435),O={};O.styleTagTransform=V(),O.setAttributes=K(),O.insert=J().bind(null,"head"),O.domAPI=Y(),O.insertStyleElement=Q();var Ue=q()(ee.Z,O),qe=ee.Z&&ee.Z.locals?ee.Z.locals:void 0;const We=r=>(0,e.jsx)("ul",{...r}),Pe=(r,a)=>r?({item:l,...d})=>(0,e.jsx)(We,{className:a==="right"?"left":"",...d}):we;var ue=r=>{var a;const{data:l=[],collapsed:d=!1,type:s="vertical",Link:x,width:p,bgColor:m,itemHeight:b,collapsedWidth:k,itemPadding:f,style:j,className:z,...N}=r,W=(0,t.useRef)(),B=(0,t.useRef)();(0,t.useEffect)(()=>()=>clearTimeout(W.current),[]);const U=I(),_=s==="horizontal",T=!_&&d,L={onClick:(Z,A)=>{Z.stopPropagation(),!_&&!T&&(g(l,A.path,"path").map(E=>E.path===A.path?E.open=!E.open:E.uuid=w()),U())},onMouseEnter:(Z,A,E,le)=>{T&&!E&&le&&(clearTimeout(W.current),B.current.style.width="var(--maxWidth)")},onMouseLeave:(Z,A,E,le)=>{T&&!E&&le&&(W.current=setTimeout(()=>B.current.style.width="",200))}},X=(_?["huxy-horizontal-tree",z]:["huxy-tree",z,T?"collapsed":""]).filter(Boolean).join(" "),{float:ye,...Me}=(a=N==null?void 0:N.style)!=null?a:{},G={"--bgColor":m,"--itemHeight":b,"--nodeListWidth":p,...Me};s==="horizontal"?(G["--itemPadding"]=f,G["--nodeFloat"]=ye):(G["--width"]=p,G["--collapsedWidth"]=k);const Fe=Pe(_||T,ye),$e=({item:Z,...A})=>T&&!Z.level?(0,e.jsx)(x,{...A,title:Z.title||Z.name}):(0,e.jsx)(x,{...A});return(0,e.jsx)("div",{ref:B,className:X,style:G,...N,children:(0,e.jsx)("div",{className:"huxy-tree-track",children:(0,e.jsx)("ul",{className:"huxy-tree-root",children:be({data:l,events:L,List:Fe,Link:$e,leftIcon:!0,rightIcon:!0})})})})},Se=(r,a)=>Object.prototype.hasOwnProperty.call(r!=null?r:{},a),Be=r=>Se(r,"current"),se=(r,a,l="click")=>{(0,t.useEffect)(()=>{const d=x=>{const p=Be(r)?r.current:r;(p==null?void 0:p.contains)&&!p.contains(x.target)&&a(x)},s=typeof l=="string"?[l]:l;return s.map(x=>{document.addEventListener(x,d,!1)}),()=>{s.map(x=>{document.removeEventListener(x,d,!1)})}},[r,a,l])};const xe=({Ricon:r,open:a})=>r===!0?(0,e.jsx)("i",{className:`huxy-header-angle-${a?"top":"bt"}`}):(0,e.jsx)(r,{status:a}),Te=({img:r,name:a,icon:l,Ricon:d,open:s})=>r?(0,e.jsxs)("div",{className:"avatar",children:[(0,e.jsx)("div",{className:"img",children:(0,e.jsx)("img",{src:r,crossOrigin:"anonymous",alt:"avatar"})}),a?(0,e.jsx)("span",{className:"txt",children:a}):null,d?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(xe,{Ricon:d,open:s})}):null]}):(0,e.jsxs)(e.Fragment,{children:[l?(0,e.jsx)("span",{className:"node-icon",children:l}):null,a?(0,e.jsx)("span",{className:"txt",children:a}):null,d?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(xe,{Ricon:d,open:s})}):null]}),fe=({item:r,open:a})=>{const{Custom:l,img:d,name:s,icon:x,Ricon:p,active:m}=r;return typeof l=="function"?(0,e.jsx)(l,{item:r}):(0,e.jsx)("a",{className:m?"active":"",title:r.title||s,children:(0,e.jsx)(Te,{img:d,name:s,icon:x,Ricon:p,open:a})})},Le=({item:r,click:a})=>{const l=(0,t.useRef)(),[d,s]=(0,t.useState)(!1);se(l,f=>d&&s(!1));const{arrowDir:x,ChildRender:p,children:m}=r,b=m==null?void 0:m.length,k=(f,j,z=null)=>{z===!1&&s(N=>!N),z&&(f.stopPropagation(),s(!1)),a(j,z)};return b||p?(0,e.jsxs)("li",{ref:l,className:d?"open":"",onClick:f=>k(f,r,!1),children:[(0,e.jsx)(fe,{item:r,open:d}),(0,e.jsx)("ul",{className:`huxy-header-arrow-${x||"rt"}`,children:b?m.map((f,j)=>(0,e.jsx)("li",{className:f.divider?"divider":"",children:(0,e.jsxs)("a",{onClick:z=>k(z,f,!0),className:f.active?"active":"",children:[f.icon?(0,e.jsx)("span",{className:"node-icon",children:f.icon}):null,(0,e.jsx)("span",{className:"drop-label",children:f.name})]})},`subItem-${j}-${f.key||f.name}`)):(0,e.jsx)("li",{children:(0,e.jsx)(p,{item:r})})})]}):(0,e.jsx)("li",{onClick:f=>k(f,r),children:(0,e.jsx)(fe,{item:r,open:d})})};var pe=({list:r,click:a})=>(0,e.jsx)("ul",{children:r.map((l,d)=>(0,e.jsx)(Le,{click:a,item:l},`navItem-${d}-${l.key||l.name}`))}),re=y(916),M={};M.styleTagTransform=V(),M.setAttributes=K(),M.insert=J().bind(null,"head"),M.domAPI=Y(),M.insertStyleElement=Q();var Ye=q()(re.Z,M),Je=re.Z&&re.Z.locals?re.Z.locals:void 0,Ee=r=>{const{leftList:a,rightList:l,handleNavClick:d,logo:s,title:x,Link:p}=r;return(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)(p,{className:"banner",to:"/",children:[s?(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:s,alt:"logo"})}):null,(0,e.jsx)("div",{className:"title",children:x!=null?x:"Dashboard"})]}),(0,e.jsx)("div",{className:"nav",children:(0,e.jsxs)("div",{className:"nav-wrap",children:[(0,e.jsx)("div",{className:"nav-left",children:(0,e.jsx)(pe,{list:a,click:m=>d(r,m)})}),(0,e.jsx)("div",{className:"nav-right",children:(0,e.jsx)(pe,{list:l,click:m=>d(r,m)})})]})})]})},te=y(232),F={};F.styleTagTransform=V(),F.setAttributes=K(),F.insert=J().bind(null,"head"),F.domAPI=Y(),F.insertStyleElement=Q();var Ke=q()(te.Z,F),Qe=te.Z&&te.Z.locals?te.Z.locals:void 0,_e=({Footer:r})=>(0,e.jsx)("div",{className:"footer",children:r?(0,e.jsx)(r,{}):"copyright \xA9 2020-2022"}),Ze=r=>{const{useStore:a,menu:l,MenuTop:d,MenuBottom:s,menuStyle:x,Link:p,inputPath:m}=r,[b,k]=a("huxy-collapse"),{width:f}=i(),j=(0,t.useRef)();return se(j,z=>{f<=1024&&b&&k(!1)}),(0,t.useEffect)(()=>{f<=1024&&b&&k(!1)},[m]),(0,e.jsxs)("div",{className:"menu",ref:j,style:{...x,height:"100%"},children:[d&&(0,e.jsx)(d,{...r}),(0,e.jsx)(ue,{data:l,collapsed:b&&f>1024,Link:p}),s&&f>1024&&(0,e.jsx)(s,{collapsed:b,setCollapsed:k})]})},oe=y(41),$={};$.styleTagTransform=V(),$.setAttributes=K(),$.insert=J().bind(null,"head"),$.domAPI=Y(),$.insertStyleElement=Q();var Ve=q()(oe.Z,$),Xe=oe.Z&&oe.Z.locals?oe.Z.locals:void 0;const Ae=450;var Re=r=>{var a;const{menu:l,current:d,MainTop:s,asideStyle:x,contentStyle:p,children:m}=r,b=(a=d.slice(-1)[0])==null?void 0:a.path,k=l==null?void 0:l.length,f=(0,t.useRef)(b),j=(0,t.useRef)(),[z,N]=(0,t.useState)("");return(0,t.useEffect)(()=>{var W;const B=(W=d.slice(-1)[0])==null?void 0:W.path;return B!==f.current&&(f.current=B,N(" ani-in"),j.current=setTimeout(()=>{N("")},Ae)),()=>{clearTimeout(j.current),N("")}},[d]),(0,e.jsxs)("div",{className:`frame-container${k?"":" no-sidebar"}`,children:[k?(0,e.jsx)("aside",{className:"frame-aside",style:x,children:(0,e.jsx)(Ze,{...r,menu:l})}):null,(0,e.jsx)("div",{className:"frame-view",children:(0,e.jsxs)("div",{className:"page-container",children:[s&&(0,e.jsx)(s,{current:d}),(0,e.jsx)("div",{className:`page-content${z}`,style:p,children:m})]})}),(0,e.jsx)("footer",{className:"frame-footer",children:(0,e.jsx)(_e,{...r})})]})},ae=y(705),D={};D.styleTagTransform=V(),D.setAttributes=K(),D.insert=J().bind(null,"head"),D.domAPI=Y(),D.insertStyleElement=Q();var Ge=q()(ae.Z,D),er=ae.Z&&ae.Z.locals?ae.Z.locals:void 0,Oe=r=>{const{useStore:a,vertical:l,horizontal:d,menu:s,headerStyle:x,navMenuStyle:p,Link:m,language:b}=r,k=(0,t.useMemo)(()=>(0,e.jsx)(Ee,{...r}),[b]),{width:f}=i(),[j]=a("huxy-collapse"),z=f<=1024,N=z?s:l,W=z?[]:d,B=W.length?"horizontal":"",U=["frame",B,j&&!B?"collapsed":""].filter(Boolean).join(" ");return(0,e.jsxs)("div",{className:U,children:[(0,e.jsxs)("header",{className:"frame-header",style:x,children:[k,W!=null&&W.length?(0,e.jsx)(ue,{data:W,type:"horizontal",Link:m,style:p}):null]}),(0,e.jsx)("main",{className:"frame-main",children:(0,e.jsx)(Re,{...r,menu:N})})]})}}(),ne}()})}}]);
