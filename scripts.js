// 选择套餐
function selectPackage(packageName) {
    document.getElementById('package').value = packageName;
    alert(`已选择套餐：${packageName}`);
}

// 表单提交
document.getElementById('broadbandForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        package: document.getElementById('package').value,
    };

    // 模拟提交（可替换为实际 API 调用）
    console.log('表单数据：', formData);
    alert('提交成功！我们将尽快与您联系。');
    document.getElementById('broadbandForm').reset();
});
