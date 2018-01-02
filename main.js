// ----------------------------------------------
//  絶対温度と逆温度の相互変換
// ----------------------------------------------

//ボルツマン定数[J/K]
const boltzmann = 1.380649e-23;

//絶対温度[K]から逆温度[/J]に変換
const TempToBeta = (t) => {
    return 1/(t*boltzmann);
};

//逆温度[/J]から絶対温度[K]に変換
const BetaToTemp = (beta) => {
    return 1/(beta*boltzmann);
};


//要素取得
const temp_textbox = document.getElementById("temp");
const beta_textbox = document.getElementById("beta");
const conv_temp_to_beta_buton = document.getElementById("conv_temp_to_beta");
const conv_beta_to_temp_buton = document.getElementById("conv_beta_to_temp");

conv_temp_to_beta_buton.addEventListener("click",(e) => {
    beta_textbox.value = Number(TempToBeta(temp_textbox.value)).toPrecision(5);
});

conv_beta_to_temp_buton.addEventListener("click",(e) => {
    temp_textbox.value = Number(BetaToTemp(beta_textbox.value)).toPrecision(5);
});