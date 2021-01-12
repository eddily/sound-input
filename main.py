while True:

    if input.sound_level() > 30:
        light.set_all(color.rgb(0, 255, 255))
    else:
        light.clear()