from rest_framework.viewsets import ModelViewSet
from ..models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import action


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # @action(detail=False, methods=["GET"])
    # def post(self, request):
    #     products = Product.objects.all()
    #     serializer = ProductSerializer(products, many=True)
    #     return Response({'received data': serializer.data})