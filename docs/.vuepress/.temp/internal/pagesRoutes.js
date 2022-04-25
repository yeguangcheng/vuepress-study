import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-631c95bc","/blog/1.html",{"title":""},["/blog/1","/blog/1.md"]],
  ["v-64d16e5b","/blog/2.html",{"title":""},["/blog/2","/blog/2.md"]],
  ["v-145ac574","/blog/",{"title":""},["/blog/index.html","/blog/README.md"]],
  ["v-5b493a7c","/subject/",{"title":""},["/subject/index.html","/subject/README.md"]],
  ["v-d190c938","/subject/algorithm/1.html",{"title":""},["/subject/algorithm/1","/subject/algorithm/1.md"]],
  ["v-ce2717fa","/subject/algorithm/2.html",{"title":""},["/subject/algorithm/2","/subject/algorithm/2.md"]],
  ["v-02901a80","/subject/computer/1.html",{"title":""},["/subject/computer/1","/subject/computer/1.md"]],
  ["v-006ccb5f","/subject/computer/2.html",{"title":""},["/subject/computer/2","/subject/computer/2.md"]],
  ["v-0221a3fe","/subject/computer/3.html",{"title":""},["/subject/computer/3","/subject/computer/3.md"]],
  ["v-4d36ac50","/subject/css/1.html",{"title":""},["/subject/css/1","/subject/css/1.md"]],
  ["v-4eeb84ef","/subject/css/2.html",{"title":""},["/subject/css/2","/subject/css/2.md"]],
  ["v-50a05d8e","/subject/css/3.html",{"title":""},["/subject/css/3","/subject/css/3.md"]],
  ["v-5255362d","/subject/css/4.html",{"title":""},["/subject/css/4","/subject/css/4.md"]],
  ["v-540a0ecc","/subject/css/5.html",{"title":""},["/subject/css/5","/subject/css/5.md"]],
  ["v-55bee76b","/subject/css/6.html",{"title":""},["/subject/css/6","/subject/css/6.md"]],
  ["v-5773c00a","/subject/css/7.html",{"title":""},["/subject/css/7","/subject/css/7.md"]],
  ["v-592898a9","/subject/css/8.html",{"title":""},["/subject/css/8","/subject/css/8.md"]],
  ["v-5add7148","/subject/css/9.html",{"title":""},["/subject/css/9","/subject/css/9.md"]],
  ["v-4d65762a","/subject/handwritten/1.html",{"title":""},["/subject/handwritten/1","/subject/handwritten/1.md"]],
  ["v-49fbc4ec","/subject/handwritten/2.html",{"title":""},["/subject/handwritten/2","/subject/handwritten/2.md"]],
  ["v-469213ae","/subject/handwritten/3.html",{"title":""},["/subject/handwritten/3","/subject/handwritten/3.md"]],
  ["v-43286270","/subject/handwritten/4.html",{"title":""},["/subject/handwritten/4","/subject/handwritten/4.md"]],
  ["v-3fbeb132","/subject/handwritten/5.html",{"title":""},["/subject/handwritten/5","/subject/handwritten/5.md"]],
  ["v-3c54fff4","/subject/handwritten/6.html",{"title":""},["/subject/handwritten/6","/subject/handwritten/6.md"]],
  ["v-15884a30","/subject/html/1.html",{"title":""},["/subject/html/1","/subject/html/1.md"]],
  ["v-173d22cf","/subject/html/2.html",{"title":""},["/subject/html/2","/subject/html/2.md"]],
  ["v-18f1fb6e","/subject/html/3.html",{"title":""},["/subject/html/3","/subject/html/3.md"]],
  ["v-1aa6d40d","/subject/html/4.html",{"title":""},["/subject/html/4","/subject/html/4.md"]],
  ["v-1c5bacac","/subject/html/5.html",{"title":""},["/subject/html/5","/subject/html/5.md"]],
  ["v-1cf3e0e8","/subject/html/",{"title":""},["/subject/html/index.html","/subject/html/README.md"]],
  ["v-592387d2","/subject/js/1.html",{"title":""},["/subject/js/1","/subject/js/1.md"]],
  ["v-5ad86071","/subject/js/2.html",{"title":""},["/subject/js/2","/subject/js/2.md"]],
  ["v-5c8d3910","/subject/js/3.html",{"title":""},["/subject/js/3","/subject/js/3.md"]],
  ["v-5e4211af","/subject/js/4.html",{"title":""},["/subject/js/4","/subject/js/4.md"]],
  ["v-5ff6ea4e","/subject/js/5.html",{"title":""},["/subject/js/5","/subject/js/5.md"]],
  ["v-61abc2ed","/subject/js/6.html",{"title":""},["/subject/js/6","/subject/js/6.md"]],
  ["v-a24a745e","/subject/mobile/",{"title":""},["/subject/mobile/index.html","/subject/mobile/README.md"]],
  ["v-1795f4fa","/subject/performance/1.html",{"title":""},["/subject/performance/1","/subject/performance/1.md"]],
  ["v-3d58567b","/subject/performance/",{"title":""},["/subject/performance/index.html","/subject/performance/README.md"]],
  ["v-74e1500e","/subject/safe/1.html",{"title":""},["/subject/safe/1","/subject/safe/1.md"]],
  ["v-23cfdddc","/subject/ts/1.html",{"title":""},["/subject/ts/1","/subject/ts/1.md"]],
  ["v-2e3b0926","/subject/vue/1.html",{"title":""},["/subject/vue/1","/subject/vue/1.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
