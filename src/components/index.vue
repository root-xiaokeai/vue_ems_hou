<template>
    <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
              <a href="" @click="putout">安全退出</a>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">main</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						欢迎:{{ user }}
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>
								ID
							</td>
							<td>
								Name
							</td>
							<td>
								img
							</td>
							<td>
								Salary
							</td>
							<td>
								Age
							</td>
							<td>
								Operation
							</td>
						</tr>
						<tr class="row1" v-for="(value,index) in emp_list">
							<td>
								{{value.id}}
							</td>
							<td>
								{{value.emp_name}}
							</td>
							<td>
								<img :src="value.img" style="height: 40px;">
							</td>
							<td>
								{{value.salary}}
							</td>
							<td>
								{{value.age}}
							</td>
							<td>
								<a href="javascript:;" @click="del(value.id)">delete emp</a>&nbsp;
<!--                <router-link to="/updateemp?id={{ value.id }}">update emp</router-link>-->
                <a href="javascript:;" @click="update(value.id)">update emp</a>
							</td>
						</tr>
					</table>
					<p>
<!--						<input type="button" class="button" value="Add Employee" to="/addemp"/>-->
            <router-link to="/addemp" class="button">Add Employee</router-link>
					</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            user:'',
            emp_list:[],
          }
      },
      methods:{
          // 安全退出
          putout(){
              localStorage.removeItem("name");
          },
        // 查询所有
          all(){
            this.$axios({
                url: "http://127.0.0.1:8000/user/emp/",
                method: "get",
              }).then(response=>{
                // 请求访问成功后可以走到这个回调函数
                console.log(response);
                this.emp_list=response.data.results
              }).catch(error=>{
                // 失败了走这个函数
                console.log(error);
                alert('查询失败')
              });
          },
        // 删除
        del(a){
            let id=a;
            alert(`${id}`);
            this.$axios.delete(`http://127.0.0.1:8000/user/emp/${id}/`).then(
            res=>{
              if(res.data.message){}
              alert('删除成功')
              this.all()
            }).catch(error=>{
              alert('删除失败')
          })
        },
      update(id){
            this.$router.push('/updateemp?id='+id)
      }

      },
      created(){
            let user_name=localStorage.name;
            this.user=user_name;
            console.log(user_name);
            if(user_name){

            }else{
              this.$router.push('/login')
            }
            this.all()
          }

    }
</script>

<style scoped>

</style>
