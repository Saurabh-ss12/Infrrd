import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { authGuard } from "./core/auth/guards/auth.guard";

// Root level routes
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/book" },
  {
    path: "book",
    canMatch: [authGuard],
    loadChildren: () =>
      import("./core/layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./core/auth/auth.module").then((m) => m.AuthModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
