function preTypeWriter(radio) {
	const css = `body {
    margin: 0;
    padding: 0;
    font-family: Georgia, serif;
    font-size: 16px;
}

header {
    position: fixed;
    top: 0;
}`;

	const python = `import random


def get_random_elem(arr: list) -> any:
    weights = [i for i in range(len(arr), 0, -1)]
    return random.choices(arr, weights=weights)[0]`;

	const javascript = `class Device {
    constructor(name, maxPower){
        this.name = name;
        this.maxPower = maxPower;
        this.currentPower = 0;
        this.connect = false;
    }
    toggle() {
        this.connect = !this.connect;`;

	const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`;

	const django = `from django.db import models
from django.contrib.auth.models import User
from django.core.cache import cache
from django.utils.translation import gettext as _
from django.utils.translation import pgettext_lazy

class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)`;

	const restapi = `from rest_framework import serializers
from chat.models import Account
from chat.models import Room
from chat.models import Message
from rest_framework import status
from rest_framework.response import Response


class AccountSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)`;

	pandas = `import pandas as pd
import numpy as np

df = pd.DataFrame(
    {
        "one": pd.Series(np.random.randn(3), index=["a", "b", "c"]),
        "two": pd.Series(np.random.randn(4), index=["a", "b", "c", "d"]),
        "three": pd.Series(np.random.randn(3), index=["b", "c", "d"]),
    }
)`;
	const speed = 50;
	let i = 0;
	document.getElementById("text-editor_content").innerHTML = "";
	document.getElementById("text-editor_name").innerHTML = radio.value;
	typeWriter(eval(radio.value), speed, i);
}

function typeWriter(txt, speed, i) {
	if (i < txt.length) {
		document.getElementById("text-editor_content").innerHTML += txt.charAt(i);
		i++;
		interval = setTimeout(typeWriter, speed, txt, speed, i);
	} else {
		i = 0;
		document.getElementById("text-editor_content").innerHTML = "";
		clearTimeout(interval);
		interval = setTimeout(typeWriter, speed, txt, speed, i);
	}

}

// Typing
const radios = document.getElementsByName('radio');
for (let radio of radios) {
	radio.addEventListener('change', function(e) {
		if (radio.checked) {
			if (typeof interval != 'undefined') {
				clearTimeout(interval);
			}
			preTypeWriter(radio);
		}
	});
}

// Scrolling
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function(e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}