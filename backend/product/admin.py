from django.contrib import admin
from .models import Product, Blog

# Register your models here.


# class ProductAdmin(admin.ModelAdmin):
#     list_display = ("slug")
#     prepopulated_fields = ("slug": ("slug"))
admin.site.register(Product)
admin.site.register(Blog)