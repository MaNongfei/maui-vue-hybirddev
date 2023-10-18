
window.app = new Vue({
    el: '#vue-app',
    data: {
        message: 'Upload files',
        objRef: null,
        fileList:[]
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`��ǰ����ѡ�� 3 ���ļ�������ѡ���� ${files.length} ���ļ�����ѡ���� ${files.length + fileList.length} ���ļ�`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`ȷ���Ƴ� ${file.name}��`);
        }


    },
})
window.initObjRef = function (objRef) {
    window.app.objRef = objRef;
}
