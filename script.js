function analyzeSkin() {
    // محاكاة لتحليل البشرة
    const types = ["دهنية", "جافة", "مختلطة"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    let recommendation = "";
    if(randomType === "دهنية") {
        recommendation = "نوصيك بمنظف جل (Foaming Gel) يحتوي على الزنك.";
    } else {
        recommendation = "نوصيك بمنظف حليبي (Cleansing Milk) مرطب.";
    }
    
    document.getElementById("result").innerHTML = 
        "نتائج التحليل: بشرتك <b>" + randomType + "</b>.<br>" + recommendation;
}