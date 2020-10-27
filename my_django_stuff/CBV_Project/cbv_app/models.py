from django.db import models
from django.urls import reverse
# Create your models here.
class School(models.Model):
    name=models.CharField(max_length=200)
    principal=models.CharField(max_length=200)
    location=models.CharField(max_length=256)
    def __str__(self):
        return self.name

    def get_absolute_url(self):# to redirect after creting view.
        return reverse("cbv_app:detail",kwargs={'pk':self.pk})

class Student(models.Model):
    name=models.CharField(max_length=100)
    age=models.PositiveIntegerField()
    school=models.ForeignKey(School,related_name="students",on_delete=models.CASCADE)
    def __str__(self):
        return self.name
