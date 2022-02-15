sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";
  return Controller.extend("avatar.group.bug.demo.controller.App", {

    onInit() {
      this.oModel = new JSONModel();
			this.oModel.loadData(sap.ui.require.toUrl("avatar/group/bug/demo/model/avatargroup.json"), null, false);
			this.getView().setModel(this.oModel, "items");
    },

    onGoAboutPage() {
      this.getOwnerComponent().getRouter().navTo('About');
		},

		onGoHomePage() {
      this.getOwnerComponent().getRouter().navTo('Home');
		}

  });
});