import{_ as d,c,a as e,w as u,b as a,v as l,o as m}from"./index-pUxV4wJZ.js";var p={VITE_URL:"https://ec-course-api.hexschool.io/",VITE_PATH:"pinyi9",BASE_URL:"/VUEWeek02/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:L}=p,f={data(){return{user:{username:"",password:""}}},methods:{login(){this.axios.post(`${_}V2/admin/signin`,this.user).then(t=>{if(!t){alert("不得填入空資訊");return}if(t.status===200){const{token:s,expired:n}=t.data;document.cookie=`leleToken=${s}; expires=${new Date(n)};`,window.alert("登入成功"),this.$router.push({name:"ProductListView"})}else this.$message.error("登入失敗")}).catch(t=>{alert(t.response.data.message)})}}},h={id:"app"},w={class:"container"},x={class:"row justify-content-center"},V=e("h1",{class:"h3 my-5 font-weight-normal text-center"}," 請先登入 ",-1),g={class:"col-8 col-md-6 col-xl-5"},v={class:"form-floating mb-3"},b=e("label",{for:"username"},"Email address",-1),E={class:"form-floating"},T=e("label",{for:"password"},"Password",-1),U=e("button",{class:"btn btn-lg btn-success w-100 mt-3",type:"submit"}," 登入 ",-1),k=e("p",{class:"mt-5 mb-3 text-muted text-center"}," © 2024 六角學院 VUE直播班 - 第二週主線作業 ",-1);function y(t,s,n,P,r,i){return m(),c("div",h,[e("div",w,[e("div",x,[V,e("div",g,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=u((...o)=>i.login&&i.login(...o),["prevent"]))},[e("div",v,[a(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.username=o),id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[l,r.user.username]]),b]),e("div",E,[a(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o),id:"password",placeholder:"Password",required:""},null,512),[[l,r.user.password]]),T]),U],32)])]),k])])}const R=d(f,[["render",y]]);export{R as default};
