(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=a(3),u=a(4),i=a(5),m=a(7),d=a(6),s=function(e){var t=e.changeValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,' "Please, leave a feedback" '),l.a.createElement("button",{type:"button",name:"good",onClick:t},"Good"),l.a.createElement("button",{type:"button",name:"neutral",onClick:t},"Neutral"),l.a.createElement("button",{type:"button",name:"bad",onClick:t},"Bad")))},b=function(e){var t=e.good,a=e.bad,n=e.neutral,r=e.total,c=e.percent,o=e.NotificationMessage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Statistics"),0===r?o:l.a.createElement("ul",null,l.a.createElement("li",{name:t}," Good:",t),l.a.createElement("li",{name:n}," Neutral: ",n," "),l.a.createElement("li",{name:a}," Bad: ",a," "),l.a.createElement("li",null," Total:",r," "),l.a.createElement("li",null,"Positive feedback: ",isNaN(c)?0:Math.round(c),"%"))))},g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.changeValue=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+=t}),0)},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),c=this.countPositiveFeedbackPercentage(r,this.state.good);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{changeValue:this.changeValue}),l.a.createElement(b,{good:t,bad:n,neutral:a,percent:c,total:r,NotificationMessage:"No feedback given"}))}}]),a}(n.Component),E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null))};c.a.render(l.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.454c9565.chunk.js.map