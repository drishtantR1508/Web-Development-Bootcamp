from django.db import models

# Create your models here.
class Product(models.Model):
    product = models.CharField(max_length=200)
    description = models.CharField(max_length=1200)
