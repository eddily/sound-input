while (true) {
    if (input.soundLevel() > 30) {
        light.setAll(color.rgb(0, 255, 255))
    } else {
        light.clear()
    }
    
}
