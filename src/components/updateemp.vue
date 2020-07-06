<template>
    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						update Emp info:
					</h1>
					<form action="emplist.html" method="post">
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
                  {{emp_id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" value="zhangshan" v-model="emp_name"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="img"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" value="20000" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" value="20" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="Confirm" @click="confirm"/>
						</p>
					</form>
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
        name: "updateemp",
      data(){
          return{
            emp_id:this.$route.query.id,
            emp_name:'',
            age:'',
            salary:''
          }
      },
      methods:{
          get_id(){
            this.$axios.get(`http://127.0.0.1:8000/user/emp/${this.emp_id}/`).then(res => {
                  console.log(res.data);
                  let data=res.data.results;
                  this.emp_name=data.emp_name;
                  this.age=data.age
                  this.salary=data.salary
              }).catch(error => {
                  this.$message.error("修改失败")
              })
          },
          confirm(){
              let formData = new FormData();
                formData.append("emp_name", this.emp_name);
                formData.append("img", this.$refs.img.files[0]);
                formData.append("salary", this.salary);
                formData.append("age", this.age);
                this.$axios({
                    url: `http://127.0.0.1:8000/user/emp/${this.emp_id}/`,
                    method: "patch",
                    data: formData,
                    headers:{
                        'content-type': 'multipart/form-data'
                    },
                }).then(res => {
                  alert(111)
                    console.log(res.data);
                    if(res.data.message){
                      this.$router.push('/index')
                    }
                }).catch(error => {
                    this.$message.error("修改失败")
                })
          }
        },
      created(){
          this.get_id()
      }
    }
</script>

<style scoped>

</style>
