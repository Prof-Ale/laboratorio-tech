/**
 * audioController.js — Gerenciador de Áudio do LabTech
 */

export const AudioCtrl = {
    music: null,

    init() {
        // Criamos o objeto de áudio apontando para o seu arquivo
        this.music = new Audio('assets/audio/trilha.mp3');
        this.music.loop = true;
        this.music.volume = 0.4; // Volume inicial mais suave
    },

    playMusic() {
        if (this.music) {
            this.music.play().catch(e => console.log("Áudio aguardando interação do usuário."));
        }
    },

    pauseMusic() {
        if (this.music) this.music.pause();
    },

    // Aumenta o volume e a velocidade quando a coisa ficar séria (Combo Alto)
    setIntensity(isHigh) {
        if (!this.music) return;
        if (isHigh) {
            this.music.playbackRate = 1.05; // Leve aceleração
            this.music.volume = 0.6;
        } else {
            this.music.playbackRate = 1.0;
            this.music.volume = 0.4;
        }
    }
};
