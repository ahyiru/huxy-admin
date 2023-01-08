(self.webpackChunk=self.webpackChunk||[]).push([[810],{8810:function(ge,De,ve){(function(he,ie){ge.exports=ie(ve(7378))})(this,function(he){return function(){"use strict";var ie={435:function(e,r,o){var h=o(703),d=o.n(h),n=o(414),c=o.n(n),i=c()(d());i.push([e.id,`.node-right-icon-close {
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
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
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
`,""]),i.locals={},r.Z=i},232:function(e,r,o){var h=o(703),d=o.n(h),n=o(414),c=o.n(n),i=c()(d());i.push([e.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),i.locals={},r.Z=i},705:function(e,r,o){var h=o(703),d=o.n(h),n=o(414),c=o.n(n),i=c()(d());i.push([e.id,`/*.frame-color {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: var(--linkColor);
  }
  a {
    color: var(--linkColor);
    &:active,
    &.active {
      color: var(--linkActiveColor);
    }
    &:hover {
      color: var(--linkHoverColor);
    }
  }
}*/
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
`,""]),i.locals={},r.Z=i},916:function(e,r,o){var h=o(703),d=o.n(h),n=o(414),c=o.n(n),i=c()(d());i.push([e.id,`.clear {
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
  width: 100%;
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
.header .nav .nav-wrap .nav-left > ul > li > .link,
.header .nav .nav-wrap .nav-right > ul > li > .link {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 12px;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > .link::before,
.header .nav .nav-wrap .nav-right > ul > li > .link::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 2px;
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon img,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon img {
  height: 25%;
  width: 100%;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > .link .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > .link .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .img + .txt {
  margin-left: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > .link .img > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt + .node-icon {
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
.header .nav .nav-wrap .nav-left > ul > li ul > li .link,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 15px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {
  font-size: 0;
  height: 100%;
  margin-right: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img img {
  height: 40%;
  width: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 10px;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link.active {
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
  /*> .link {
              // border-left:1px solid rgba(0, 0, 0, 0.1);
              &::before {
                content: "";
                position: absolute;
                left: 0;
                top: calc(@headerHeight / 2 - 10px);
                height: 20px;
                width: 1px;
                background-color: rgba(0, 0, 0, 0.1);
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
`,""]),i.locals={},r.Z=i},41:function(e,r,o){var h=o(703),d=o.n(h),n=o(414),c=o.n(n),i=c()(d());i.push([e.id,`@keyframes ani-fade-in {
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
`,""]),i.locals={},r.Z=i},414:function(e){e.exports=function(r){var o=[];return o.toString=function(){return this.map(function(h){var d="",n=typeof h[5]!="undefined";return h[4]&&(d+="@supports (".concat(h[4],") {")),h[2]&&(d+="@media ".concat(h[2]," {")),n&&(d+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),d+=r(h),n&&(d+="}"),h[2]&&(d+="}"),h[4]&&(d+="}"),d}).join("")},o.i=function(h,d,n,c,i){typeof h=="string"&&(h=[[null,h,void 0]]);var j={};if(n)for(var g=0;g<this.length;g++){var N=this[g][0];N!=null&&(j[N]=!0)}for(var w=0;w<h.length;w++){var v=[].concat(h[w]);n&&j[v[0]]||(typeof i!="undefined"&&(typeof v[5]=="undefined"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=i),d&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=d),c&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=c):v[4]="".concat(c)),o.push(v))}},o}},703:function(e){e.exports=function(r){return r[1]}},53:function(e,r,o){var h=o(899),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function g(N,w,v){var I,P={},S=null,R=null;v!==void 0&&(S=""+v),w.key!==void 0&&(S=""+w.key),w.ref!==void 0&&(R=w.ref);for(I in w)c.call(w,I)&&!j.hasOwnProperty(I)&&(P[I]=w[I]);if(N&&N.defaultProps)for(I in w=N.defaultProps,w)P[I]===void 0&&(P[I]=w[I]);return{$$typeof:d,type:N,key:S,ref:R,props:P,_owner:i.current}}r.Fragment=n,r.jsx=g,r.jsxs=g},458:function(e,r,o){e.exports=o(53)},748:function(e){var r=[];function o(n){for(var c=-1,i=0;i<r.length;i++)if(r[i].identifier===n){c=i;break}return c}function h(n,c){for(var i={},j=[],g=0;g<n.length;g++){var N=n[g],w=c.base?N[0]+c.base:N[0],v=i[w]||0,I="".concat(w," ").concat(v);i[w]=v+1;var P=o(I),S={css:N[1],media:N[2],sourceMap:N[3],supports:N[4],layer:N[5]};if(P!==-1)r[P].references++,r[P].updater(S);else{var R=d(S,c);c.byIndex=g,r.splice(g,0,{identifier:I,updater:R,references:1})}j.push(I)}return j}function d(n,c){var i=c.domAPI(c);i.update(n);var j=function(g){if(g){if(g.css===n.css&&g.media===n.media&&g.sourceMap===n.sourceMap&&g.supports===n.supports&&g.layer===n.layer)return;i.update(n=g)}else i.remove()};return j}e.exports=function(n,c){c=c||{},n=n||[];var i=h(n,c);return function(j){j=j||[];for(var g=0;g<i.length;g++){var N=i[g],w=o(N);r[w].references--}for(var v=h(j,c),I=0;I<i.length;I++){var P=i[I],S=o(P);r[S].references===0&&(r[S].updater(),r.splice(S,1))}i=v}}},736:function(e){var r={};function o(d){if(typeof r[d]=="undefined"){var n=document.querySelector(d);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(c){n=null}r[d]=n}return r[d]}function h(d,n){var c=o(d);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}e.exports=h},706:function(e){function r(o){var h=document.createElement("style");return o.setAttributes(h,o.attributes),o.insert(h,o.options),h}e.exports=r},567:function(e,r,o){function h(d){var n=o.nc;n&&d.setAttribute("nonce",n)}e.exports=h},306:function(e){function r(d,n,c){var i="";c.supports&&(i+="@supports (".concat(c.supports,") {")),c.media&&(i+="@media ".concat(c.media," {"));var j=typeof c.layer!="undefined";j&&(i+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),i+=c.css,j&&(i+="}"),c.media&&(i+="}"),c.supports&&(i+="}");var g=c.sourceMap;g&&typeof btoa!="undefined"&&(i+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),n.styleTagTransform(i,d,n.options)}function o(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)}function h(d){var n=d.insertStyleElement(d);return{update:function(c){r(n,d,c)},remove:function(){o(n)}}}e.exports=h},62:function(e){function r(o,h){if(h.styleSheet)h.styleSheet.cssText=o;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(o))}}e.exports=r},899:function(e){e.exports=he}},ce={};function y(e){var r=ce[e];if(r!==void 0)return r.exports;var o=ce[e]={id:e,exports:{}};return ie[e](o,o.exports,y),o.exports}(function(){y.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return y.d(r,{a:r}),r}})(),function(){y.d=function(e,r){for(var o in r)y.o(r,o)&&!y.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){y.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){y.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){y.nc=void 0}();var ne={};return function(){y.r(ne),y.d(ne,{default:function(){return $e}});var e=y(458),r=y(899),o=()=>![typeof window,typeof document].includes("undefined"),h=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),d=t=>h(t).indexOf("element")>-1,n=(t=null)=>{var a,l;return o()?d(t)?{width:t.clientWidth,height:t.clientHeight}:{width:(a=window.innerWidth)!=null?a:document.documentElement.clientWidth,height:(l=window.innerHeight)!=null?l:document.documentElement.clientHeight}:{width:0,height:0}},c=(t={})=>{const a=(0,r.useRef)(0),[l,u]=(0,r.useState)(t),s=(0,r.useCallback)(x=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>u(x))},[]);return(0,r.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]),[l,s]},i=()=>{const[t,a]=c(n());return(0,r.useEffect)(()=>{const l=()=>a(n());return window.addEventListener("resize",l,!1),()=>window.removeEventListener("resize",l,!1)},[]),t},j=t=>h(t)==="array",g=(t,a,l="id",u="children")=>{if(!j(t))return null;const s=x=>{for(let f=0,m=x.length;f<m;f++){const k=x[f];if(k[l]===a)return[k];if(j(k[u])){const b=s(k[u]);if(b)return[k].concat(b)}}};return s(t)},N=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),w=()=>{let t=N();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const l=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(a==="x"?l:l&3|8).toString(16)})};const v=t=>++t;var I=()=>{const[,t]=(0,r.useState)(0);return(0,r.useCallback)(()=>t(v),[])},P=t=>j(t)&&!!t.length;const S=({item:t,to:a,preventDefault:l,stopPropagation:u,className:s,...x})=>l?(0,e.jsx)("span",{className:`link${s?` ${s}`:""}`,...x}):(0,e.jsx)("a",{href:a,className:`link${s?` ${s}`:""}`,...x}),R=({item:t,...a})=>(0,e.jsx)("ul",{...a}),me=(t,...a)=>{const l={};return Object.keys(t).filter(Boolean).map(u=>{l[u]=s=>t[u](s,...a)}),l},ue=({data:t=[],events:a={},List:l=R,Link:u=S,leftIcon:s,rightIcon:x,level:f=0})=>t.map(m=>{const{name:k,path:b,icon:p,rightIcon:C,active:z,open:H,children:W,linkProps:B}=m,U=P(W),A=me(a,m,f,U),T=m.id||b||k,_=p!=null?p:s,G=C!=null?C:x;return U?(0,e.jsxs)("li",{className:H?"open":"","has-children":"true",...A,children:[(0,e.jsxs)(u,{item:{...m,level:f},className:z?"active":"",to:b,preventDefault:!0,stopPropagation:!1,...B,children:[_?(0,e.jsx)("div",{className:"node-left-icon",children:_===!0?(0,e.jsx)("i",{className:"default-left-icon"}):_}):null,k?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:k})}):null,G?(0,e.jsx)("div",{className:"node-right-icon",children:G===!0?(0,e.jsx)("i",{className:"default-right-icon"}):G}):null]}),(0,e.jsx)(l,{item:m,children:ue({data:W,events:a,List:l,Link:u,leftIcon:s,rightIcon:x,level:f+1})})]},T):(0,e.jsx)("li",{...A,children:(0,e.jsxs)(u,{item:{...m,level:f},className:z?"active":"",to:b,...B,children:[_?(0,e.jsx)("div",{className:"node-left-icon",children:_===!0?(0,e.jsx)("i",{className:"default-left-icon"}):_}):null,k?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:k})}):null]})},T)});var ke=ue,be=()=>{const t=(0,r.useRef)(!0);return t.current?(t.current=!1,!0):!1},we=({item:t,style:a,...l})=>{var u;const{uuid:s,open:x}=t,f=(0,r.useRef)(),m=(0,r.useRef)(),k=be(),[b,p]=(0,r.useState)("");return(0,r.useEffect)(()=>{const C=f.current,z=x?`${C.scrollHeight}px`:"0px";p(z)},[]),(0,r.useEffect)(()=>{if(k)return;const C=f.current,z=x?"0px":`${C.scrollHeight}px`;return p(z),m.current=setTimeout(()=>{const H=x?`${C.scrollHeight}px`:"0px";p(H)},5),()=>clearTimeout(m.current)},[x,(u=t.children)==null?void 0:u.length]),(0,r.useEffect)(()=>{s&&p("")},[s]),(0,e.jsx)("ul",{ref:f,style:{...a,maxHeight:b},...l})},ze=y(748),q=y.n(ze),je=y(306),J=y.n(je),Ce=y(736),Y=y.n(Ce),Ne=y(567),K=y.n(Ne),Ie=y(706),V=y.n(Ie),He=y(62),X=y.n(He),ee=y(435),$={};$.styleTagTransform=X(),$.setAttributes=K(),$.insert=Y().bind(null,"head"),$.domAPI=J(),$.insertStyleElement=V();var Ue=q()(ee.Z,$),qe=ee.Z&&ee.Z.locals?ee.Z.locals:void 0;const We=t=>(0,e.jsx)("ul",{...t}),Pe=(t,a)=>t?({item:l,...u})=>(0,e.jsx)(We,{className:a==="right"?"left":"",...u}):we;var de=t=>{var a;const{data:l=[],collapsed:u=!1,type:s="vertical",Link:x,width:f,bgColor:m,itemHeight:k,collapsedWidth:b,itemPadding:p,style:C,className:z,...H}=t,W=(0,r.useRef)(),B=(0,r.useRef)();(0,r.useEffect)(()=>()=>clearTimeout(W.current),[]);const U=I(),A=s==="horizontal",T=!A&&u,_={onClick:(Z,L)=>{Z.stopPropagation(),!A&&!T&&(g(l,L.path,"path").map(E=>E.path===L.path?E.open=!E.open:E.uuid=w()),U())},onMouseEnter:(Z,L,E,le)=>{T&&!E&&le&&(clearTimeout(W.current),B.current.style.width="var(--maxWidth)")},onMouseLeave:(Z,L,E,le)=>{T&&!E&&le&&(W.current=setTimeout(()=>B.current.style.width="",200))}},G=(A?["huxy-horizontal-tree",z]:["huxy-tree",z,T?"collapsed":""]).filter(Boolean).join(" "),{float:ye,...Oe}=(a=H==null?void 0:H.style)!=null?a:{},Q={"--bgColor":m,"--itemHeight":k,"--nodeListWidth":f,...Oe};s==="horizontal"?(Q["--itemPadding"]=p,Q["--nodeFloat"]=ye):(Q["--width"]=f,Q["--collapsedWidth"]=b);const Me=Pe(A||T,ye),Fe=({item:Z,className:L,...E})=>T&&!Z.level?(0,e.jsx)(x,{className:`link${L?` ${L}`:""}`,...E,title:Z.title||Z.name}):(0,e.jsx)(x,{className:`link${L?` ${L}`:""}`,...E});return(0,e.jsx)("div",{ref:B,className:G,style:Q,...H,children:(0,e.jsx)("div",{className:"huxy-tree-track",children:(0,e.jsx)("ul",{className:"huxy-tree-root",children:ke({data:l,events:_,List:Me,Link:Fe,leftIcon:!0,rightIcon:!0})})})})},Se=(t,a)=>Object.prototype.hasOwnProperty.call(t!=null?t:{},a),Be=t=>Se(t,"current"),se=(t,a,l="click")=>{(0,r.useEffect)(()=>{const u=x=>{const f=Be(t)?t.current:t;(f==null?void 0:f.contains)&&!f.contains(x.target)&&a(x)},s=typeof l=="string"?[l]:l;return s.map(x=>{document.addEventListener(x,u,!1)}),()=>{s.map(x=>{document.removeEventListener(x,u,!1)})}},[t,a,l])};const xe=({Ricon:t,open:a})=>t===!0?(0,e.jsx)("i",{className:`huxy-header-angle-${a?"top":"bt"}`}):(0,e.jsx)(t,{status:a}),Ee=({img:t,name:a,icon:l,Ricon:u,open:s})=>t?(0,e.jsxs)("div",{className:"avatar",children:[(0,e.jsx)("div",{className:"img",children:(0,e.jsx)("img",{src:t,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),a?(0,e.jsx)("span",{className:"txt",children:a}):null,u?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(xe,{Ricon:u,open:s})}):null]}):(0,e.jsxs)(e.Fragment,{children:[l?(0,e.jsx)("span",{className:"node-icon",children:l}):null,a?(0,e.jsx)("span",{className:"txt",children:a}):null,u?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(xe,{Ricon:u,open:s})}):null]}),pe=({item:t,open:a})=>{const{Custom:l,img:u,name:s,icon:x,Ricon:f,active:m}=t;return typeof l=="function"?(0,e.jsx)(l,{item:t,className:"link"}):(0,e.jsx)("span",{className:`link${m?" active":""}`,title:t.title||s,children:(0,e.jsx)(Ee,{img:u,name:s,icon:x,Ricon:f,open:a})})},Te=({item:t,click:a})=>{const l=(0,r.useRef)(),[u,s]=(0,r.useState)(!1);se(l,p=>u&&s(!1));const{arrowDir:x,ChildRender:f,children:m}=t,k=m==null?void 0:m.length,b=(p,C,z=null)=>{z===!1&&s(H=>!H),z&&(p.stopPropagation(),s(!1)),a(C,z)};return k||f?(0,e.jsxs)("li",{ref:l,className:u?"open":"",onClick:p=>b(p,t,!1),children:[(0,e.jsx)(pe,{item:t,open:u}),(0,e.jsx)("ul",{className:`huxy-header-arrow-${x||"rt"}`,children:k?m.map((p,C)=>(0,e.jsx)("li",{className:p.divider?"divider":"",children:(0,e.jsxs)("span",{onClick:z=>b(z,p,!0),className:`link${p.active?" active":""}`,children:[p.icon?(0,e.jsx)("span",{className:"node-icon",children:p.icon}):null,(0,e.jsx)("span",{className:"drop-label",children:p.name})]})},`subItem-${C}-${p.key||p.name}`)):(0,e.jsx)("li",{children:(0,e.jsx)(f,{item:t})})})]}):(0,e.jsx)("li",{onClick:p=>b(p,t),children:(0,e.jsx)(pe,{item:t,open:u})})};var fe=({list:t,click:a})=>(0,e.jsx)("ul",{children:t.map((l,u)=>(0,e.jsx)(Te,{click:a,item:l},`navItem-${u}-${l.key||l.name}`))}),te=y(916),O={};O.styleTagTransform=X(),O.setAttributes=K(),O.insert=Y().bind(null,"head"),O.domAPI=J(),O.insertStyleElement=V();var Je=q()(te.Z,O),Ye=te.Z&&te.Z.locals?te.Z.locals:void 0,Le=t=>{const{leftList:a,rightList:l,handleNavClick:u,logo:s,title:x,Link:f}=t;return(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)(f,{className:"banner",to:"/",children:[s?(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{width:"1",height:"1",src:s,alt:"logo"})}):null,(0,e.jsx)("div",{className:"title",children:x!=null?x:"Dashboard"})]}),(0,e.jsx)("div",{className:"nav",children:(0,e.jsxs)("div",{className:"nav-wrap",children:[(0,e.jsx)("div",{className:"nav-left",children:(0,e.jsx)(fe,{list:a,click:m=>u(t,m)})}),(0,e.jsx)("div",{className:"nav-right",children:(0,e.jsx)(fe,{list:l,click:m=>u(t,m)})})]})})]})},re=y(232),M={};M.styleTagTransform=X(),M.setAttributes=K(),M.insert=Y().bind(null,"head"),M.domAPI=J(),M.insertStyleElement=V();var Ke=q()(re.Z,M),Ve=re.Z&&re.Z.locals?re.Z.locals:void 0,_e=({Footer:t})=>(0,e.jsx)("div",{className:"footer",children:t?(0,e.jsx)(t,{}):"copyright \xA9 2020-2022"}),Ae=t=>{const{useStore:a,menu:l,MenuTop:u,MenuBottom:s,menuStyle:x,Link:f,inputPath:m}=t,[k,b]=a("huxy-collapse"),{width:p}=i(),C=(0,r.useRef)();return se(C,z=>{p<=1024&&k&&b(!1)}),(0,r.useEffect)(()=>{p<=1024&&k&&b(!1)},[m]),(0,e.jsxs)("div",{className:"menu",ref:C,style:{...x,height:"100%"},children:[u&&(0,e.jsx)(u,{...t}),(0,e.jsx)(de,{data:l,collapsed:k&&p>1024,Link:f}),s&&p>1024&&(0,e.jsx)(s,{collapsed:k,setCollapsed:b})]})},oe=y(41),F={};F.styleTagTransform=X(),F.setAttributes=K(),F.insert=Y().bind(null,"head"),F.domAPI=J(),F.insertStyleElement=V();var Xe=q()(oe.Z,F),Ge=oe.Z&&oe.Z.locals?oe.Z.locals:void 0;const Ze=450;var Re=t=>{var a;const{menu:l,current:u,MainTop:s,asideStyle:x,contentStyle:f,children:m}=t,k=(a=u.slice(-1)[0])==null?void 0:a.path,b=l==null?void 0:l.length,p=(0,r.useRef)(k),C=(0,r.useRef)(),[z,H]=(0,r.useState)("");return(0,r.useEffect)(()=>{var W;const B=(W=u.slice(-1)[0])==null?void 0:W.path;return B!==p.current&&(p.current=B,H(" ani-in"),C.current=setTimeout(()=>{H("")},Ze)),()=>{clearTimeout(C.current),H("")}},[u]),(0,e.jsxs)("div",{className:`frame-container${b?"":" no-sidebar"}`,children:[b?(0,e.jsx)("aside",{className:"frame-aside",style:x,children:(0,e.jsx)(Ae,{...t,menu:l})}):null,(0,e.jsx)("div",{className:"frame-view",children:(0,e.jsxs)("div",{className:"page-container",children:[s&&(0,e.jsx)(s,{current:u}),(0,e.jsx)("div",{className:`page-content${z}`,style:f,children:m})]})}),(0,e.jsx)("footer",{className:"frame-footer",children:(0,e.jsx)(_e,{...t})})]})},ae=y(705),D={};D.styleTagTransform=X(),D.setAttributes=K(),D.insert=Y().bind(null,"head"),D.domAPI=J(),D.insertStyleElement=V();var Qe=q()(ae.Z,D),et=ae.Z&&ae.Z.locals?ae.Z.locals:void 0,$e=t=>{const{useStore:a,vertical:l,horizontal:u,menu:s,headerStyle:x,navMenuStyle:f,Link:m,language:k}=t,b=(0,r.useMemo)(()=>(0,e.jsx)(Le,{...t}),[k]),{width:p}=i(),[C]=a("huxy-collapse"),z=p<=1024,H=z?s:l,W=z?[]:u,B=W.length?"horizontal":"",U=["frame",B,C&&!B?"collapsed":""].filter(Boolean).join(" ");return(0,e.jsxs)("div",{className:U,children:[(0,e.jsxs)("header",{className:"frame-header",style:x,children:[b,W!=null&&W.length?(0,e.jsx)(de,{data:W,type:"horizontal",Link:m,style:f}):null]}),(0,e.jsx)("main",{className:"frame-main",children:(0,e.jsx)(Re,{...t,menu:H})})]})}}(),ne}()})}}]);
