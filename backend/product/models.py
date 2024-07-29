from django.db import models
import uuid

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=600, null=True, blank=True)
    category = models.CharField(max_length=100)
    created_at = models.DateField(auto_now=True)
    id_product = models.UUIDField( 
         default = uuid.uuid4, 
         editable = False, blank=True)
    slug =models.SlugField(unique=True, blank=True, null=True) 
    
    def __str__(self):
        return f"Products: {self.name}"