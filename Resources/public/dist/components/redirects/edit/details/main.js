define(["underscore","jquery","services/suluredirect/redirect-manager","text!./form.html"],function(a,b,c,d){var e={formSelector:"#redirect-routes-form"};return{defaults:{templates:{form:d},translations:{source:"sulu_redirect.source",target:"sulu_redirect.target"}},layout:{content:{width:"fixed",leftSpace:!0,rightSpace:!0}},initialize:function(){this.render(),this.bindDomEvents(),this.bindCustomEvents()},render:function(){this.$el.html(this.templates.form({translations:this.translations})),this.form=this.sandbox.form.create(e.formSelector),this.form.initialized.then(function(){this.sandbox.form.setData(e.formSelector,this.data||{})}.bind(this))},bindDomEvents:function(){this.$el.find("input, textarea").on("keypress",function(){this.sandbox.emit("sulu.tab.dirty")}.bind(this))},bindCustomEvents:function(){this.sandbox.on("sulu.tab.save",this.save.bind(this))},save:function(a){if(this.sandbox.form.validate(e.formSelector)){var b=this.sandbox.util.extend(!1,{},a,this.sandbox.form.getData(e.formSelector));return c.save(b).then(function(a){this.sandbox.emit("sulu.tab.saved",a)}.bind(this))}},loadComponentData:function(){return this.options.data()}}});