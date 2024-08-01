from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, BlogViewSet


router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('products', BlogViewSet)




urlpatterns = [
    path('', include(router.urls)),
    path('blog/', include(router.urls)),
]