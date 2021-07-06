from rest_framework import serializers
from base.models import Products, Reviews, Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
