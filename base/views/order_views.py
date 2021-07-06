from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Orders
from base.serializers.order_serializers import OrdersSerealizer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['GET'])
def getOrders(request):
    try:
        orders = Orders.objects.all()
        serializer = OrdersSerealizer(orders, many=True)
        return Response(serializer.data)
    
     except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getOrder(request, pk):
    order = Orders.objects.get(orderId=pk)
    serializer = OrdersSerealizer(order, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrder(request, pk):
    try:
        data = request.data
        order = Orders.objects.get(orderId=pk)
        order.orderName = data['name']
        order.orderDate = data['date']
        order.usrId = data['usr']
        order.save()
        message = {'detail': 'Update order'}
        return Response(message)
        
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createOrder(request):
    try:
        data =  request.data
        order = Orders.objects.create(
            orderName = data['name']
            orderDate = data['date']
            usrId = data['usr']
        )
        order.save()
        serializer = OrdersSerealizer(order, many=False)
        return Response(serializer.data)
   
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteOrder(request, pk):
    order = Orders.objects.get(prodId = pk)
    order.delete()
    
    return Response('Delete order')